

---



```php:Mobile Money Payment Handler:pay.php
<?php
// Headers for API and JSON response
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method Not Allowed']);
    exit();
}

// Get the incoming JSON data from the request body
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Your API Credentials (!!! IMPORTANT: REPLACE WITH YOUR OWN !!!)
$api_key = "YOUR_PAYMENT_API_KEY"; // Replace with your actual API Key
$api_url = "https://api.example.com/initiate_payment"; // Replace with your payment provider's API URL
$merchant_id = "YOUR_MOMO_MERCHANT_ID"; // Replace with your Mobile Money Merchant ID

// Your email for notifications (!!! IMPORTANT: REPLACE WITH YOUR OWN !!!)
$commission_email = "eadinkrah30@gmail.com";
$musician_email = "moxygen30@gmail.com";

// --- VALIDATION ---
$required_fields = ['name', 'email', 'phone', 'amount', 'musician_id', 'musician_share', 'site_commission'];
foreach ($required_fields as $field) {
    if (!isset($data[$field])) {
        http_response_code(400);
        echo json_encode(['error' => 'Missing required field: ' . $field]);
        exit();
    }
}

// Sanitize and get variables
$customer_name = htmlspecialchars($data['name']);
$customer_email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$customer_phone = htmlspecialchars($data['phone']);
$amount = floatval($data['amount']);
$musician_id = htmlspecialchars($data['musician_id']);
$musician_share = floatval($data['musician_share']);
$site_commission = floatval($data['site_commission']);

// Check if inputs are valid
if (!filter_var($customer_email, FILTER_VALIDATE_EMAIL) || !is_numeric($amount) || $amount <= 0) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid input data.']);
    exit();
}

// --- PAYMENT API INTEGRATION ---
$payment_payload = [
    "amount" => $amount,
    "currency" => "GHS",
    "customerName" => $customer_name,
    "customerEmail" => $customer_email,
    "customerPhone" => $customer_phone,
    "description" => "Booking for " . $musician_id,
    "merchantId" => $merchant_id,
    "callbackUrl" => "https://yourwebsite.com/payment_callback.php" // Replace with a real callback URL
];

$ch = curl_init($api_url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Authorization: Bearer ' . $api_key
]);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payment_payload));

$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

$response_data = json_decode($response, true);

if ($http_code !== 200 || !isset($response_data['success'])) {
    http_response_code(500);
    echo json_encode(['error' => 'Payment initiation failed.', 'details' => $response_data]);
    exit();
}

// --- SUCCESS: SEND EMAIL NOTIFICATIONS ---
if ($response_data['success']) {
    // Email to the site owner (for commission tracking)
    $commission_subject = "New Booking Commission Received";
    $commission_body = "A new booking has been made:\n\n";
    $commission_body .= "Musician: " . $musician_id . "\n";
    $commission_body .= "Total Amount: GHS " . ($amount / 100) . "\n";
    $commission_body .= "Your Commission: GHS " . ($site_commission / 100) . "\n\n";
    $commission_body .= "Customer Name: " . $customer_name . "\n";
    $commission_body .= "Customer Email: " . $customer_email . "\n";
    $commission_body .= "Customer Phone: " . $customer_phone . "\n";
    mail($commission_email, $commission_subject, $commission_body);

    // Email to the musician (for booking notification)
    $musician_subject = "New Booking for You!";
    $musician_body = "You have a new booking from OtwoGhana Music:\n\n";
    $musician_body .= "Customer Name: " . $customer_name . "\n";
    $musician_body .= "Customer Email: " . $customer_email . "\n";
    $musician_body .= "Customer Phone: " . $customer_phone . "\n\n";
    $musician_body .= "Your Share of Payment: GHS " . ($musician_share / 100) . "\n";
    $musician_body .= "Our team will be in touch shortly to finalize the details.\n";
    mail($musician_email, $musician_subject, $musician_body);

    // Final response to the user
    echo json_encode(['success' => true, 'message' => 'Payment request sent! Please approve the payment on your phone.']);
} else {
    echo json_encode(['success' => false, 'message' => 'An error occurred during payment.']);
}

?>