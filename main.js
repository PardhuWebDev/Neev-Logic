/**
 * Main application logic for Neev Logic
 * Handles animations, icon generation, and interactions
 */

document.addEventListener('DOMContentLoaded', () => {

    emailjs.init('VjpSEgA5SWDZSjO3k');

    lucide.createIcons();
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 }});

    tl.to("#hero-bg", { scale: 1, opacity: 0.3, duration: 2.5 })
      .to(".reveal-text", { opacity: 1, translateY: 0 }, "-=2")
      .to(".reveal-subtext", { opacity: 1, translateY: 0 }, "-=1.7")
      .to(".reveal-btns", { opacity: 1, translateY: 0, stagger: 0.2 }, "-=1.5");

    gsap.to(".problem-card", {
        scrollTrigger: {
            trigger: "#problem",
            start: "top 80%",
        },
        opacity: 1,
        translateY: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out"
    });


    gsap.from(".engine-content", {
        scrollTrigger: {
            trigger: "#growth-engine",
            start: "top 70%",
        },
        opacity: 0,
        x: -40,
        duration: 1,
        ease: "power2.out"
    });

    gsap.from(".engine-table", {
        scrollTrigger: {
            trigger: "#growth-engine",
            start: "top 70%",
        },
        opacity: 0,
        x: 40,
        duration: 1,
        ease: "power2.out"
    });


    gsap.from(".case-text", {
        scrollTrigger: {
            trigger: "#case-study",
            start: "top 70%",
        },
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out"
    });

    gsap.from(".case-stats", {
        scrollTrigger: {
            trigger: "#case-study",
            start: "top 70%",
        },
        opacity: 0,
        scale: 0.95,
        duration: 1.2,
        ease: "back.out(1.2)"
    });

    gsap.to(".solution-panel", {
        scrollTrigger: {
            trigger: "#solution",
            start: "top 70%",
        },
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out"
    });

    gsap.from(".quote-reveal", {
        scrollTrigger: {
            trigger: ".quote-reveal",
            start: "top 90%",
        },
        opacity: 0,
        scale: 0.95,
        duration: 1.5,
        ease: "power1.inOut"
    });

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            const messageDiv = document.getElementById('form-message');

            btn.disabled = true;
            btn.innerText = "Securing Foundation...";
            messageDiv.classList.add('hidden');

            emailjs.sendForm('service_6jwhddj', 'template_cihq4wf', contactForm)
                .then(() => {
                    btn.innerText = "Foundation Secured!";
                    btn.style.backgroundColor = "#22c55e";

                    messageDiv.textContent = "Thank you! We'll contact you shortly.";
                    messageDiv.className = "p-4 rounded-lg text-sm font-medium bg-green-50 text-green-700 border border-green-200";
                    messageDiv.classList.remove('hidden');

                    contactForm.reset();

                    setTimeout(() => {
                        btn.innerText = originalText;
                        btn.disabled = false;
                        btn.style.backgroundColor = "";
                        messageDiv.classList.add('hidden');
                    }, 5000);
                })
                .catch((error) => {
                    console.error('EmailJS Error:', error);

                    btn.innerText = originalText;
                    btn.disabled = false;

                    messageDiv.textContent = "Something went wrong. Please try WhatsApp instead.";
                    messageDiv.className = "p-4 rounded-lg text-sm font-medium bg-red-50 text-red-700 border border-red-200";
                    messageDiv.classList.remove('hidden');

                    setTimeout(() => {
                        messageDiv.classList.add('hidden');
                    }, 5000);
                });
        });
    }

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroBg = document.getElementById('hero-bg');
        if (heroBg) {
            heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });
});
