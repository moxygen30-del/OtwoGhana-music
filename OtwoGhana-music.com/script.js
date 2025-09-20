
// Data for singers

//Gospel section
const singers = [
    {
        id: "amina-gospel",
        name: "Amina Mensah",
        genre: "Gospel Singer",
        image: "assets/videos/young-man-with-umbrella-standing-against-trees-kenyan-man-doing-traditional-dance-masai_1048944-4345102.jpg",
        category: "gospel",
        bio: "Amina's powerful voice and soulful delivery have made her a leading voice in contemporary Ghanaian gospel music. She is available for church programs, concerts, and studio sessions.",
        price: "GHS 800",
        availability: "Weekends & Special Events",
        contact: "+233 24 111 2233",
        videos: [{ src: "assets/videos/2927944-uhd_4096_2160_24fps.mp4", title: "Live Gospel Performance" }]
    },
    {
        id: "amina-gospel",
        name: "Amina Mensah",
        genre: "Gospel Singer",
        image: "assets/videos/young-man-with-umbrella-standing-against-trees-kenyan-man-doing-traditional-dance-masai_1048944-4345102.jpg",
        category: "gospel",
        bio: "Amina's powerful voice and soulful delivery have made her a leading voice in contemporary Ghanaian gospel music. She is available for church programs, concerts, and studio sessions.",
        price: "GHS 800",
        availability: "Weekends & Special Events",
        contact: "+233 24 111 2233",
        videos: [{ src: "assets/videos/2927944-uhd_4096_2160_24fps.mp4", title: "Live Gospel Performance" }]
    },
    //Gospel section end

    //Hiplife section
    {
        id: "kofi-hiplife",
        name: "Kofi Owusu",
        genre: "Hiplife Singer",
        image: "assets/images/singer-hiplife.jpg",
        category: "hiplife",
        bio: "Kofi brings a fresh, modern energy to the Hiplife genre with his catchy hooks and charismatic stage presence. He is a master of blending traditional Ghanaian rhythms with modern beats.",
        price: "GHS 1000",
        availability: "Evenings (by appointment)",
        contact: "+233 55 445 5667",
        videos: [{ src: "assets/videos/hiplife-promo.mp4", title: "Latest Promo Reel" }]
    },
    {
        id: "esther-highlife",
        name: "Esther Agyapong",
        genre: "Highlife Singer",
        image: "assets/images/singer-highlife.jpg",
        category: "highlife",
        bio: "With a voice as smooth as velvet, Esther is a true queen of Highlife. Her timeless melodies and classic style are perfect for bringing an authentic feel to any event or recording.",
        price: "GHS 950",
        availability: "Weekends",
        contact: "+233 20 889 9001",
        videos: [{ src: "assets/videos/highlife-performance.mp4", title: "Highlife Live Session" }]
    },
    //Hiplife section end

    //Afrobeat section
    {
        id: "nana-afro",
        name: "Nana Kusi",
        genre: "Afro Singer",
        image: "assets/images/singer-afro.jpg",
        category: "afro",
        bio: "Nana is a rising star in the Afro music scene, known for his unique blend of energetic beats and captivating storytelling. His performances are always a crowd favorite.",
        price: "GHS 900",
        availability: "Weekdays & Weekends",
        contact: "+233 24 998 8776",
        videos: [{ src: "assets/videos/afro-music-video.mp4", title: "Official Music Video" }]
    },
    //Afrobeat section end

    //Reggae section
    {
        id: "yaw-reggae",
        name: "Yaw Marley",
        genre: "Reggae Singer",
        image: "assets/images/singer-reggae.jpg",
        category: "reggae",
        bio: "Yaw's music is a powerful blend of conscious lyrics and authentic Reggae rhythms. He carries a message of peace and unity, and his performances are both soulful and uplifting.",
        price: "GHS 850",
        availability: "By Appointment Only",
        contact: "+233 50 121 3141",
        videos: [{ src: "assets/videos/reggae-acoustic.mp4", title: "Acoustic Session" }]
    },
    //Reggae section end
];
//Guitarists section
// Data for instrumentalists
const instrumentalists = [
    {
        id: "john-guitar",
        name: "John Mensah",
        instrument: "Guitarist",
        genre: "Highlife, Afro-Jazz",
        image: "assets/images/inst-guitarist.jpg",
        category: "guitarist",
        bio: "John is a versatile guitarist known for his soulful melodies and rhythmic precision. He specializes in creating captivating guitar lines that elevate any production.",
        price: "GHS 500",
        availability: "Weekends & Evenings",
        contact: "+233 24 123 4567",
        videos: [{ src: "assets/videos/guitarist-solo.mp4", title: "Solo Improv Session" }]
    },
    {
        id: "daniel-lead-guitar",
        name: "Daniel Kojo",
        instrument: "Lead Guitarist",
        genre: "Afro-Jazz, Highlife, Funk",
        image: "assets/images/inst-lead-guitarist.jpg",
        category: "guitarist",
        bio: "Daniel is a virtuoso lead guitarist whose electrifying solos and intricate arrangements are unmatched. He brings passion and technical excellence to every project.",
        price: "GHS 750",
        availability: "Weekends & Studio Sessions",
        contact: "+233 50 998 7766",
        videos: [{ src: "assets/videos/lead-guitarist-solo.mp4", title: "Lead Solo Performance" }]
    },
    //Guitarists section end

    //pianists section
    {
        id: "Ox-piano",
        name: "Emmanuel Afari",
        instrument: "Pianist / Keyboardist",
        genre: "Gospel, Jazz, Afro-Pop",
        image: "assets/images/photo_2025-09-19_23-59-04.jpg",
        category: "pianist",
        bio: "Emmanuel is an exceptional pianist whose fingers dance across the keys with grace and power. He is highly sought after for studio recordings and live concerts.",
        price: "GHS 600",
        availability: "Weekdays & Weekends",
        contact: "0202601022",
        videos: [{ src: "assets/images/photo_2025-09-19_23-59-04.jpg", title: "Promo Reel" }]
    },
    {
        id: "Ox-piano",
        name: "Emmanuel Afari",
        instrument: "Pianist / Keyboardist",
        genre: "Gospel, Jazz, Afro-Pop",
        image: "assets/images/photo_2025-09-19_23-59-04.jpg",
        category: "pianist",
        bio: "Emmanuel is an exceptional pianist whose fingers dance across the keys with grace and power. He is highly sought after for studio recordings and live concerts.",
        price: "GHS 600",
        availability: "Weekdays & Weekends",
        contact: "0202601022",
        videos: [{ src: "assets/images/photo_2025-09-19_23-59-04.jpg", title: "Promo Reel" }]
    },
    //pianists section end

    //drummers section
    {
        id: "david-drums",
        name: "David Asante",
        instrument: "Drummer / Percussionist",
        genre: "Afrobeat, Traditional, Funk",
        image: "assets/images/inst-drummer.jpg",
        category: "drummer",
        bio: "David is a master of rhythm, providing the driving force behind countless tracks. He delivers tight grooves and dynamic fills, perfect for any genre.",
        price: "GHS 700",
        availability: "Mornings & Evenings",
        contact: "+233 20 112 2334",
        videos: [{ src: "assets/videos/drummer-groove.mp4", title: "Afrobeat Groove" }]
    },
    //drummers section end

    //bassist section
    {
        id: "ama-bass",
        name: "Ama Owusu",
        instrument: "Bassist",
        genre: "Highlife, Funk, Afrobeat",
        image: "assets/images/inst-bassist.jpg",
        category: "bassist",
        bio: "Ama lays down the solid low end for every track. Her intuitive and melodic basslines provide the perfect foundation for any musical piece.",
        price: "GHS 550",
        availability: "Weekends & Evenings",
        contact: "+233 27 543 2109",
        videos: [{ src: "assets/videos/bassist-promo.mp4", title: "Promo Reel" }]
    },
    //bassist section end

    //saxophonist section
    {
        id: "kofi-sax",
        name: "Kofi Boafo",
        instrument: "Saxophonist",
        genre: "Jazz, Highlife, Gospel",
        image: "assets/images/inst-sax.jpg",
        category: "sax",
        bio: "Kofi's soulful saxophone sound adds a layer of emotion and sophistication to any production. His improvisational skills are second to none.",
        price: "GHS 650",
        availability: "Weekdays (by appointment)",
        contact: "+233 50 876 5432",
        videos: [{ src: "assets/videos/sax-solo.mp4", title: "Live Solo" }]
    },
    //saxophonist section end

    //engineer section
    {
        id: "grace-engineer",
        name: "Grace Agyemang",
        instrument: "Audio Engineer",
        genre: "Studio Mixing, Mastering",
        image: "assets/images/inst-engineer.jpg",
        category: "engineer",
        bio: "Grace is a highly skilled audio engineer, specializing in creating crisp, clear, and powerful mixes. She ensures every project sounds its absolute best.",
        price: "GHS 400",
        availability: "Monday - Friday",
        contact: "+233 24 334 4556",
        videos: [{ src: "assets/videos/engineer-promo.mp4", title: "Studio Showcase" }]
    },
    //engineer section end

    //trumpeter section
    {
        id: "kwame-trumpet",
        name: "Kwame Asamoah",
        instrument: "Trumpeter",
        genre: "Highlife, Afro-Jazz, Funk",
        image: "assets/images/inst-trumpeter.jpg",
        category: "trumpeter",
        bio: "Kwame's bright and powerful trumpet playing cuts through any mix. His vibrant horn lines are perfect for adding flair and energy to a track.",
        price: "GHS 500",
        availability: "Weekends & Public Holidays",
        contact: "+233 20 567 8901",
        videos: [{ src: "assets/videos/trumpet-solo.mp4", title: "Recording Session" }]
    },
    //trumpeter section end
];

// Data for bands
const bands = [
    {
        id: "sankofa-rhythms",
        name: "Sankofa Rhythms",
        instrument: "Full Band",
        genre: "Highlife, Afro-Fusion",
        image: "assets/images/band-1.jpg",
        category: "afro-fusion",
        bio: "A dynamic ensemble that blends traditional Ghanaian rhythms with modern Afro-fusion and jazz. They are a perfect choice for events and concerts looking for a vibrant, authentic sound.",
        price: "GHS 2500",
        availability: "Weekends & special events",
        contact: "+233 54 111 2233",
        videos: [{ src: "assets/videos/band-performance-1.mp4", title: "Live Highlife Performance" }]
    },
    {
        id: "the-gospel-voices",
        name: "The Gospel Voices",
        instrument: "Gospel Band",
        genre: "Gospel",
        image: "assets/images/band-2.jpg",
        category: "gospel",
        bio: "A powerful and anointed gospel band dedicated to creating a spiritual atmosphere with their worship and praise music. Ideal for church services, crusades, and gospel concerts.",
        price: "GHS 2000",
        availability: "Fridays, Saturdays, and Sundays",
        contact: "+233 20 445 5667",
        videos: [{ src: "assets/videos/band-performance-2.mp4", title: "Gospel Praise Session" }]
    },
    {
        id: "sunyani-highlife-stars",
        name: "Sunyani Highlife Stars",
        instrument: "Highlife Band",
        genre: "Highlife",
        image: "assets/images/band-3.jpg",
        category: "highlife",
        bio: "The best live band in the Bono Region, specializing in classic and contemporary highlife music. Their performances are legendary and guaranteed to get any crowd dancing.",
        price: "GHS 3000",
        availability: "All nights",
        contact: "+233 50 889 9001",
        videos: [{ src: "assets/videos/band-performance-3.mp4", title: "Highlife Live Show" }]
    },
];
//BAND section end

// DOM Elements
const singersGrid = document.querySelector('.singers-grid');
const instrumentalistsGrid = document.querySelector('.instrumentalists-grid');
const bandsGrid = document.querySelector('.bands-grid');

const singerCategoryButtons = document.querySelectorAll('.singer-categories .category-btn');
const instCategoryButtons = document.querySelectorAll('.instrumentalist-categories .category-btn');
const bandCategoryButtons = document.querySelectorAll('.band-categories .category-btn');

const bookingModal = document.getElementById('booking-modal');
const closeModalBtn = document.querySelector('.close-button');
const modalMusicianImage = document.getElementById('modal-musician-image');
const modalMusicianName = document.getElementById('modal-musician-name');
const modalMusicianBio = document.getElementById('modal-musician-bio');
const modalMusicianPrice = document.getElementById('modal-musician-price');
const modalMusicianTime = document.getElementById('modal-musician-time');
const modalMusicianContact = document.getElementById('modal-musician-contact');
const modalMusicianVideos = document.getElementById('modal-musician-videos');
const modalBookBtn = document.querySelector('.modal-book-btn');

// --- Functions to dynamically load content and filter ---
function loadSingers() {
    if (!singersGrid) return; // Only load if on the musicians.html page
    singersGrid.innerHTML = '';
    singers.forEach(singer => {
        const singerCard = document.createElement('div');
        singerCard.classList.add('instrumentalist-card'); // Reusing the same card style
        singerCard.dataset.categoryId = singer.id;
        singerCard.dataset.category = singer.category;
        singerCard.innerHTML = `
            <img src="${singer.image}" alt="${singer.name} - ${singer.genre}">
            <h3>${singer.name}</h3>
            <p>${singer.genre}</p>
        `;
        singersGrid.appendChild(singerCard);
        singerCard.addEventListener('click', () => openBookingModal(singer));
    });
}

function loadInstrumentalists() {
    if (!instrumentalistsGrid) return; // Only load if on the instrumentalist.html page
    instrumentalistsGrid.innerHTML = '';
    instrumentalists.forEach(inst => {
        const instCard = document.createElement('div');
        instCard.classList.add('instrumentalist-card');
        instCard.dataset.instrumentalistId = inst.id;
        instCard.dataset.category = inst.category;
        instCard.innerHTML = `
            <img src="${inst.image}" alt="${inst.name} - ${inst.instrument}">
            <h3>${inst.name}</h3>
            <p>${inst.instrument} (${inst.genre})</p>
        `;
        instrumentalistsGrid.appendChild(instCard);
        instCard.addEventListener('click', () => openBookingModal(inst));
    });
}

function loadBands() {
    if (!bandsGrid) return; // Only load if on the band.html page
    bandsGrid.innerHTML = '';
    bands.forEach(band => {
        const bandCard = document.createElement('div');
        bandCard.classList.add('instrumentalist-card');
        bandCard.dataset.bandId = band.id;
        bandCard.dataset.category = band.category;
        bandCard.innerHTML = `
            <img src="${band.image}" alt="${band.name} - ${band.genre}">
            <h3>${band.name}</h3>
            <p>Band (${band.genre})</p>
        `;
        bandsGrid.appendChild(bandCard);
        bandCard.addEventListener('click', () => openBookingModal(band));
    });
}

function filterContent(items, category) {
    items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

// Function to handle opening the modal with either a profile or a payment form
function openBookingModal(musician) {
    modalMusicianImage.src = musician.image;
    modalMusicianImage.alt = musician.name;
    modalMusicianName.textContent = musician.name;
    modalMusicianBio.textContent = musician.bio;
    modalMusicianPrice.textContent = musician.price;
    modalMusicianTime.textContent = musician.availability;
    modalMusicianContact.textContent = musician.contact;

    // Show videos if available
    modalMusicianVideos.innerHTML = '';
    musician.videos.forEach(video => {
        const videoDiv = document.createElement('div');
        videoDiv.innerHTML = `
            <h4>${video.title}</h4>
            <video controls src="${video.src}"></video>
        `;
        modalMusicianVideos.appendChild(videoDiv);
    });

    // CHANGE: This button now triggers the payment form
    modalBookBtn.textContent = "Book & Pay Now";
    modalBookBtn.href = "#"; // Remove default link behavior

    // CHANGE: New functionality for the button
    modalBookBtn.onclick = (event) => { // Added event parameter
        event.preventDefault(); // Prevent default anchor behavior
        // Here, we'll create a simple payment form within the modal
        const bookingFormHtml = `
            <div class="payment-form">
                <h3>Finalize Your Booking</h3>
                <p>Please provide your contact details to proceed with payment.</p>
                <input type="text" id="customer-name" placeholder="Your Full Name" required>
                <input type="email" id="customer-email" placeholder="Your Email Address" required>
                <input type="tel" id="customer-phone" placeholder="Mobile Money Number (e.g., 0551234567)" required>
                <button id="pay-now-btn">Pay for Booking</button>
            </div>
        `;
        // Clear videos and replace with payment form
        modalMusicianVideos.innerHTML = bookingFormHtml;
        
        // Finalize the payment on button click
        document.getElementById('pay-now-btn').onclick = () => {
            const customerName = document.getElementById('customer-name').value;
            const customerEmail = document.getElementById('customer-email').value;
            const customerPhone = document.getElementById('customer-phone').value;

            if (!customerName || !customerEmail || !customerPhone) {
                alert('Please fill out all fields.');
                return;
            }

            // Call the backend to initiate payment
            initiatePayment(musician, customerName, customerEmail, customerPhone);
        };
    };

    bookingModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
    bookingModal.style.display = 'none';
    document.body.style.overflow = '';
    modalMusicianVideos.querySelectorAll('video').forEach(video => video.pause());
}

// Function to initiate payment with the backend
function initiatePayment(musician, name, email, phone) {
    // This is the total price from the musician's profile
    const priceString = musician.price.split(' ')[1].trim();
    const amount = parseFloat(priceString) * 100; // Convert to pesewas for API

    // Data to send to the payment backend
    const data = {
        name: name,
        email: email,
        phone: phone,
        amount: amount,
        musician_id: musician.id,
        musician_share: (amount * 0.85).toFixed(0),
        site_commission: (amount * 0.15).toFixed(0)
    };

    // Use a fetch() call to send data to your pay.php script
    fetch('pay.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.text())
    .then(result => {
        alert(result);
        closeBookingModal();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
}

// --- General Event Listeners and Initial Load ---
document.addEventListener('DOMContentLoaded', () => {
    // Determine which page we are on and load the correct content
    const pathSegments = window.location.pathname.split('/');
    const currentPage = pathSegments[pathSegments.length - 1]; // Gets 'index.html', 'musicians.html', etc.

    if (currentPage === 'musicians.html') {
        loadSingers();
        if (singerCategoryButtons) {
            singerCategoryButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const category = button.dataset.category;
                    singerCategoryButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');
                    filterContent(document.querySelectorAll('.singers-grid .instrumentalist-card'), category);
                });
            });
        }
    } else if (currentPage === 'instrumentalist.html') {
        loadInstrumentalists();
        if (instCategoryButtons) {
            instCategoryButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const category = button.dataset.category;
                    instCategoryButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');
                    filterContent(document.querySelectorAll('.instrumentalists-grid .instrumentalist-card'), category);
                });
            });
        }
    } else if (currentPage === 'band.html') {
        loadBands();
        if (bandCategoryButtons) {
            bandCategoryButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const category = button.dataset.category;
                    bandCategoryButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');
                    filterContent(document.querySelectorAll('.bands-grid .instrumentalist-card'), category);
                });
            });
        }
    }

    // Modal event listeners (should be on all pages where modals can appear)
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeBookingModal);
    }
    if (bookingModal) {
        window.addEventListener('click', (event) => {
            if (event.target == bookingModal) {
                closeBookingModal();
            }
        });
        window.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && bookingModal.style.display === 'flex') {
                closeBookingModal();
            }
        });
    }

    // Contact form validation (only relevant on index.html)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const name = contactForm.querySelector('input[name="name"]').value;
            const email = contactForm.querySelector('input[name="email"]').value;
            const inquiryType = contactForm.querySelector('select[name="inquiry_type"]').value;
            const message = contactForm.querySelector('textarea[name="message"]').value;
            if (!name || !email || !inquiryType || !message) {
                alert('Please fill out all fields of the contact form.');
                event.preventDefault();
            }
        });
    }

    // Smooth scrolling and active navigation links (for all pages)
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) { // Internal links on the same page (e.g., #about on index.html)
                e.preventDefault();
                document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
            } else if (href.includes('#') && href.split('#')[0] === currentPage) { // Internal links on the current page with hash (e.g., musicians.html#singers-section)
                 e.preventDefault();
                 document.querySelector('#' + href.split('#')[1]).scrollIntoView({ behavior: 'smooth' });
            }
            // For external links (e.g., to other HTML pages), default behavior is fine.
        });
    });

    // Handle "Listen to Our Music" button on index.html
    const playAllBtn = document.getElementById('play-all-btn');
    if (playAllBtn) {
        playAllBtn.addEventListener('click', () => {
            alert("To hear our music, please visit our Singers or Instrumentalists pages and click on a profile!");
        });
    }

    // Highlight active nav link based on current page URL
    document.querySelectorAll('.nav-links a').forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || (linkHref === 'index.html' && currentPage === '')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Handle active link for internal sections on index.html specifically
    if (currentPage === 'index.html' || currentPage === '') {
        window.addEventListener('scroll', () => {
            let currentSectionId = '';
            const sections = document.querySelectorAll('section'); // Only sections on index.html

            sections.forEach(section => {
                if (section.id && section.id !== 'booking-modal') { // Exclude modal
                    const sectionTop = section.offsetTop - document.querySelector('.main-header').offsetHeight; // Account for fixed header
                    const sectionHeight = section.clientHeight;

                    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                        currentSectionId = section.getAttribute('id');
                    }
                }
            });

            document.querySelectorAll('.nav-links li a').forEach(a => {
                a.classList.remove('active');
                if (a.getAttribute('href').endsWith(`#${currentSectionId}`)) {
                    a.classList.add('active');
                } else if (currentSectionId === '' && a.getAttribute('href') === 'index.html') { // If at the top of index.html
                    a.classList.add('active');
                }
            });
        });
    }
});




