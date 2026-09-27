/* 
    NOVA - Product Landing Page
    Designed & Developed by Ananya Das
    Cognetix Technology - Project 3
*/


const menuBtn =
    document.getElementById("menuBtn");

const nav =
    document.getElementById("nav");

const header =
    document.getElementById("header");

const exploreBtn =
    document.getElementById("exploreBtn");

const navStartBtn =
    document.getElementById("navStartBtn");

const ctaBtn =
    document.getElementById("ctaBtn");

const startModal =
    document.getElementById("startModal");

const featureModal =
    document.getElementById("featureModal");

const closeStart =
    document.getElementById("closeStart");

const closeFeature =
    document.getElementById("closeFeature");

const startForm =
    document.getElementById("startForm");

const featureTitle =
    document.getElementById("featureTitle");

const featureText =
    document.getElementById("featureText");

const toast =
    document.getElementById("toast");

const year =
    document.getElementById("year");


/* YEAR */

year.textContent =
    new Date().getFullYear();


/* MOBILE MENU */

menuBtn.addEventListener(
    "click",
    function () {

        nav.classList.toggle("open");

    }
);


/* CLOSE MENU AFTER NAVIGATION */

nav.querySelectorAll("a").forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                nav.classList.remove("open");

            }
        );

    }
);


/* NAV BUTTON */

navStartBtn.addEventListener(
    "click",
    function () {

        nav.classList.remove("open");

        openModal(startModal);

    }
);


/* EXPLORE BUTTON */

exploreBtn.addEventListener(
    "click",
    function () {

        document
            .getElementById("features")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);


/* MAIN CTA */

ctaBtn.addEventListener(
    "click",
    function () {

        openModal(startModal);

    }
);


/* OPEN MODAL */

function openModal(modal) {

    modal.classList.add("show");

}


/* CLOSE MODALS */

closeStart.addEventListener(
    "click",
    function () {

        startModal.classList.remove("show");

    }
);


closeFeature.addEventListener(
    "click",
    function () {

        featureModal.classList.remove("show");

    }
);


/* CLOSE WHEN CLICKING OUTSIDE */

startModal.addEventListener(
    "click",
    function (event) {

        if (
            event.target === startModal
        ) {

            startModal.classList.remove(
                "show"
            );

        }

    }
);


featureModal.addEventListener(
    "click",
    function (event) {

        if (
            event.target === featureModal
        ) {

            featureModal.classList.remove(
                "show"
            );

        }

    }
);


/* FEATURE LEARN MORE */

const learnButtons =
    document.querySelectorAll(
        ".learn-btn"
    );


learnButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                const title =
                    button.dataset.title;

                const text =
                    button.dataset.text;


                featureTitle.textContent =
                    title;

                featureText.textContent =
                    text;


                openModal(
                    featureModal
                );

            }
        );

    }
);


/* START FORM */

startForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document
                .getElementById("userName")
                .value
                .trim();


        if (!name) {

            showToast(
                "Please enter your name."
            );

            return;

        }


        startModal.classList.remove(
            "show"
        );


        showToast(
            `Welcome to NOVA, ${name}!`
        );


        startForm.reset();

    }
);


/* HEADER ON SCROLL */

window.addEventListener(
    "scroll",
    function () {

        if (
            window.scrollY > 30
        ) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    }
);


/* TOAST */

function showToast(message) {

    toast.textContent =
        message;

    toast.classList.add(
        "show"
    );


    clearTimeout(
        showToast.timer
    );


    showToast.timer =
        setTimeout(
            function () {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );
}


/* SCROLL REVEAL */

const revealElements =
    document.querySelectorAll(
        ".feature-card, .benefit-row, .testimonial, .cta"
    );


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(
    function (element) {

        element.style.opacity =
            "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        observer.observe(
            element
        );

    }
);