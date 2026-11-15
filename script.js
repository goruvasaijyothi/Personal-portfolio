/* ===========================
   TYPING EFFECT
=========================== */

const words = [
    "Computer Science Student",
    "Web Developer",
    "Java Programmer",
    "Python Developer",
    "Machine Learning Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }

        }

    }

    const speed = isDeleting ? 70 : 120;

    setTimeout(typeEffect, speed);
}

typeEffect();

/* ===========================
   SMOOTH SCROLL
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});

/* ===========================
   ACTIVE NAVIGATION
=========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

/* ===========================
   SCROLL ANIMATION
=========================== */

const revealElements = document.querySelectorAll(
    ".project-card, .skill-card, .education-card, .about-container"
);

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 120) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0px)";

        }

    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(50px)";
    element.style.transition = "all 0.8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* ===========================
   BACK TO TOP BUTTON
=========================== */

// Create button

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

// Style button

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.width = "45px";
topButton.style.height = "45px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#38bdf8";
topButton.style.color = "#111";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
topButton.style.zIndex = "999";

// Show/Hide button

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

// Scroll to top

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

/* ===========================
   CONTACT FORM
=========================== */

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    form.reset();

});