
// =====================================
// PROJECT IMAGE SLIDESHOW
// =====================================

document.querySelectorAll(".project-slider").forEach(function(slider) {

    const images = slider.querySelectorAll("img");
    const previousButton = slider.querySelector(".prev");
    const nextButton = slider.querySelector(".next");
    const counter = slider.querySelector(".slide-counter");

    let currentIndex = 0;
    let slideTimer;

    // Display selected image
    function showSlide(index) {

        images.forEach(function(image) {
            image.classList.remove("active");
        });

        images[index].classList.add("active");

        // Update image counter
        counter.textContent =
            (index + 1) + " / " + images.length;
    }

    // Move to next image
    function nextSlide() {

        currentIndex++;

        if (currentIndex >= images.length) {
            currentIndex = 0;
        }

        showSlide(currentIndex);
    }

    // Move to previous image
    function previousSlide() {

        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }

        showSlide(currentIndex);
    }

    // Start automatic slideshow
    function startSlideshow() {

        clearInterval(slideTimer);

        if (images.length > 1) {
            slideTimer = setInterval(nextSlide, 3000);
        }
    }

    // Previous button
    previousButton.addEventListener("click", function() {
        previousSlide();
        startSlideshow();
    });

    // Next button
    nextButton.addEventListener("click", function() {
        nextSlide();
        startSlideshow();
    });

    // Pause when mouse is over the slideshow
    slider.addEventListener("mouseenter", function() {
        clearInterval(slideTimer);
    });

    // Continue when mouse leaves
    slider.addEventListener("mouseleave", function() {
        startSlideshow();
    });

    // Show first image and start slideshow
    showSlide(currentIndex);
    startSlideshow();

});


// =====================================
// CONTACT FORM VALIDATION
// =====================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        const formMessage = document.getElementById("formMessage");

        // Check whether all fields are completed
        if (name === "" || email === "" ||
            subject === "" || message === "") {

            formMessage.textContent = "Please complete all fields.";
            formMessage.style.color = "red";

            return;
        }

        // Check email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            formMessage.textContent = "Please enter a valid email address.";
            formMessage.style.color = "red";

            return;
        }

        // Display successful validation message
        formMessage.textContent =
            "Your form has been validated successfully!";

        formMessage.style.color = "green";

        contactForm.reset();

    });

}

// =====================================
// MOBILE NAVIGATION MENU
// =====================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function() {

        navMenu.classList.toggle("show");

        const isExpanded = navMenu.classList.contains("show");

        menuToggle.setAttribute("aria-expanded", isExpanded);

        menuToggle.setAttribute(
            "aria-label",
            isExpanded ? "Close navigation menu" : "Open navigation menu"
        );

        menuToggle.textContent = isExpanded ? "✕" : "☰";

    });

}

// =====================================
// BACK TO TOP BUTTON
// =====================================

const backToTopButton = document.getElementById("backToTop");

if (backToTopButton) {

    // Show button when scrolling down
    window.addEventListener("scroll", function() {

        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }

    });

    // Return to the top when clicked
    backToTopButton.addEventListener("click", function() {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}