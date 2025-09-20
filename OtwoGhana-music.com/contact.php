

```php:Contact Form Handler:contact.php
<?php
// Function to sanitize input data
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Get and sanitize form data from POST request
$name = sanitize_input($_POST['name']);
$email = sanitize_input($_POST['email']);
$inquiry_type = sanitize_input($_POST['inquiry_type']);
$message = sanitize_input($_POST['message']);

// Your email address where you want to receive the messages
$to = "eadinkrah30@gmail.com";

// Subject of the email
$subject = "New Inquiry from OtwoGhana Music Website";

// Construct the email body
$email_body = "You have received a new message from your website's contact form.\n\n";
$email_body .= "Name: " . $name . "\n";
$email_body .= "Email: " . $email . "\n";
$email_body .= "Inquiry Type: " . $inquiry_type . "\n";
$email_body .= "Message:\n" . $message . "\n";

// Set email headers
$headers = "From: " . $email . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";

// Attempt to send the email
if (mail($to, $subject, $email_body, $headers)) {
    echo "Message sent successfully! We will get back to you shortly.";
} else {
    echo "Error: Unable to send your message. Please try again later.";
}
?>