/* ==================================================
   AKESAN - INTERAÇÕES E FLUIDEZ
================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==============================
       SCROLL SUAVE
    ============================== */
    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(link => {
        link.addEventListener("click", e => {
            const targetId = link.getAttribute("href");

            if (targetId.length > 1) {
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });

    /* ==============================
       NAVBAR AO SCROLL
    ============================== */
    const nav = document.querySelector(".nav");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            nav.classList.add("nav-scrolled");
        } else {
            nav.classList.remove("nav-scrolled");
        }
    });

    /* ==============================
       MENU ATIVO (SCROLL SPY)
    ============================== */
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-menu a");

    function activateMenu() {
        let scrollPosition = window.scrollY + 120;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {
                navLinks.forEach(link => {
                    link.classList.remove("active");

                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", activateMenu);

    /* ==============================
       ANIMAÇÃO AO APARECER (REVEAL)
    ============================== */
  /* ==============================
   ANIMAÇÃO AO APARECER (ATÉ DIFERENCIAIS)
============================== */
const revealElements = document.querySelectorAll(
    ".service-card, .diferencial-item"
);


    const revealObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("reveal-visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach(el => {
        el.classList.add("reveal");
        revealObserver.observe(el);
    });

});
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

/* Fecha o menu ao clicar em um link */
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});
