/* =====================================================
   THE BRIDE -- JAVASCRIPT
===================================================== */


/* =====================================================
   LOADING SCREEN
===================================================== */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(function () {
        loader.classList.add("hide");
    }, 700);

});


/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("open");

    if (navMenu.classList.contains("open")) {
        menuBtn.innerHTML = "×";
    } else {
        menuBtn.innerHTML = "☰";
    }

});


/* Close mobile menu after clicking a link */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("open");
        menuBtn.innerHTML = "☰";

    });

});


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


/* =====================================================
   IMAGE LIGHTBOX
===================================================== */

const galleryImages = document.querySelectorAll(
    ".gallery img, .engagement-gallery img, .bride-gallery img, .photo-grid img"
);

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");


galleryImages.forEach(function (image) {

    image.addEventListener("click", function () {

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        lightbox.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});


function closeImageLightbox() {

    lightbox.classList.remove("show");

    document.body.style.overflow = "";

}


closeLightbox.addEventListener("click", closeImageLightbox);


lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {
        closeImageLightbox();
    }

});


/* Close lightbox with Escape */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeImageLightbox();

        closeLetterModal();

    }

});


/* =====================================================
   LETTER MODALS
===================================================== */

const letters = document.querySelectorAll(".letter");

const letterModal = document.getElementById("letterModal");
const letterText = document.getElementById("letterText");
const closeLetter = document.getElementById("closeLetter");


letters.forEach(function (letter) {

    letter.addEventListener("click", function () {

        const message = letter.getAttribute("data-message");

        letterText.textContent = message;

        letterModal.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});


function closeLetterModal() {

    letterModal.classList.remove("show");

    if (!lightbox.classList.contains("show")) {
        document.body.style.overflow = "";
    }

}


closeLetter.addEventListener("click", closeLetterModal);


letterModal.addEventListener("click", function (event) {

    if (event.target === letterModal) {
        closeLetterModal();
    }

});


/* =====================================================
   FINAL SURPRISE
===================================================== */

const surpriseBtn = document.getElementById("surpriseBtn");
const finalReveal = document.getElementById("finalReveal");


surpriseBtn.addEventListener("click", function () {

    finalReveal.classList.add("show");

    surpriseBtn.style.display = "none";

    setTimeout(function () {

        finalReveal.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 150);

});


/* =====================================================
   BACKGROUND MUSIC
===================================================== */

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

let musicPlaying = false;


musicBtn.addEventListener("click", function () {

    if (!musicPlaying) {

        bgMusic.play()
            .then(function () {

                musicPlaying = true;
                musicBtn.classList.add("playing");
                musicBtn.innerHTML = "❚❚";

            })
            .catch(function () {

                alert(
                    "Add a file named 'song.mp3' to the same folder as index.html."
                );

            });

    } else {

        bgMusic.pause();

        musicPlaying = false;

        musicBtn.classList.remove("playing");
        musicBtn.innerHTML = "♫";

    }

});


/* =====================================================
   BACK TO TOP
===================================================== */

const topBtn = document.getElementById("topBtn");


window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});


topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =====================================================
   PREVENT BROKEN IMAGE EXPERIENCE
===================================================== */

const allImages = document.querySelectorAll("img");


allImages.forEach(function (image) {

    image.addEventListener("error", function () {

        image.style.background = "#dfd2c5";

        image.style.minHeight = "150px";

        image.alt = "Photo not added yet";

    });

});


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(function (link) {

        link.style.fontWeight = "normal";

        if (link.getAttribute("href") === "#" + currentSection) {
            link.style.fontWeight = "bold";
        }

    });

});


/* =====================================================
   TOUCH FRIENDLY IMAGE BEHAVIOUR
===================================================== */

document.addEventListener("touchstart", function () {
    // Keeps interactions responsive on mobile devices.
}, {
    passive: true
});