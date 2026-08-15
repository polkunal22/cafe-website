/* =========================
   MOBILE NAVBAR
========================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll("#navMenu a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });
}


/* =========================
   MENU FILTER & SEARCH
========================= */

let currentCategory = "all";
let currentSearch = "";

function applyMenuFilters() {
    const categories = document.querySelectorAll(".menu-category");

    categories.forEach(categoryBlock => {
        const categoryName = categoryBlock.getAttribute("data-category");
        const matchesCategory = currentCategory === "all" || categoryName === currentCategory;

        let hasVisibleCard = false;

        categoryBlock.querySelectorAll(".food-card").forEach(card => {
            const itemName = (card.querySelector("h4")?.textContent || "").toLowerCase();
            const matchesSearch = !currentSearch || itemName.includes(currentSearch);
            const shouldShow = matchesCategory && matchesSearch;

            card.style.display = shouldShow ? "block" : "none";

            if (shouldShow) {
                hasVisibleCard = true;
            }
        });

        categoryBlock.style.display = matchesCategory && hasVisibleCard ? "block" : "none";
    });
}

function filterMenu(category, clickedButton = null) {
    currentCategory = category;

    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.classList.toggle("active", btn === clickedButton || (clickedButton === null && btn.getAttribute("onclick")?.includes(`'${category}'`)));
    });

    document.getElementById("gallerySection").style.display = "none";
    document.getElementById("menuSearchBox").style.display = "block";
    document.querySelectorAll(".menu-category").forEach(cat => cat.style.display = "block");

    applyMenuFilters();
}

function showGallery() {
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    document.querySelector(".filter-btn:last-of-type").classList.add("active");

    document.getElementById("menuSearchBox").style.display = "none";
    document.querySelectorAll(".menu-category").forEach(cat => cat.style.display = "none");
    document.getElementById("gallerySection").style.display = "block";
}

function searchMenu() {
    const input = document.getElementById("menuSearch");

    if (!input) return;

    currentSearch = input.value.trim().toLowerCase();
    applyMenuFilters();
}


/* =========================
   GALLERY LIGHTBOX
========================= */

const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

if (galleryImages.length > 0 && lightbox && lightboxImg) {
    galleryImages.forEach(img => {
        img.addEventListener("click", () => {
            lightbox.classList.add("show");
            lightboxImg.src = img.src;
        });
    });
}

if (closeBtn && lightbox) {
    closeBtn.addEventListener("click", () => {
        lightbox.classList.remove("show");
    });
}

if (lightbox) {
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove("show");
        }
    });
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox && lightbox.classList.contains("show")) {
        lightbox.classList.remove("show");
    }
});


/* =========================
   BOOKING FORM
========================= */

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
    bookingForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("customerName")?.value.trim() || "";
        const mobile = document.getElementById("customerMobile")?.value.trim() || "";
        const email = document.getElementById("customerEmail")?.value.trim() || "";
        const date = document.getElementById("bookingDate")?.value || "";
        const time = document.getElementById("bookingTime")?.value || "";
        const seats = document.getElementById("seatNumber")?.value || "";
        const occasion = document.getElementById("occasion")?.value || "";
        const message = document.getElementById("specialRequest")?.value.trim() || "";

        if (mobile.length !== 10) {
            alert("Please enter a valid 10 digit mobile number.");
            return;
        }

        if (Number(seats) > 30) {
            alert("Maximum booking capacity is 30 persons.");
            return;
        }

        const whatsappMessage =
            `*CAFE BY PASS & RESTAURANT*%0A` +
            `--------------------------%0A%0A` +
            `*TABLE BOOKING REQUEST*%0A%0A` +
            `Name: ${name}%0A` +
            `Mobile: ${mobile}%0A` +
            `Email: ${email}%0A` +
            `Date: ${date}%0A` +
            `Time: ${time}%0A` +
            `Seats: ${seats}%0A` +
            `Occasion: ${occasion}%0A` +
            `Special Request: ${message || "None"}%0A%0A` +
            `Please confirm my table booking.`;

        const whatsappURL = `https://wa.me/916230711180?text=${whatsappMessage}`;
        window.open(whatsappURL, "_blank");

        alert("Booking details are ready. WhatsApp will open to send your booking request.");
        bookingForm.reset();
    });
}


/* =========================
   SET MINIMUM DATE
========================= */

const dateInput = document.getElementById("bookingDate");

if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", today);
}


/* =========================
   INITIALIZE MENU
========================= */

if (document.querySelector(".menu-category")) {
    applyMenuFilters();
}