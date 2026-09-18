// ========================================
// PORTFOLIO - GADIS INDRIANI
// AESTHETIC PINK THEME - FULL RESPONSIVE
// Semua gambar PNG statis (tanpa upload/drag/klik)
// ========================================

// ----- MOBILE MENU -----
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
}

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (hamburger) hamburger.classList.remove('active');
        if (navMenu) navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// ----- HEADER SCROLL -----
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 50) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    }
});

// ----- ACTIVE NAV LINK -----
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ========================================
// ANIMASI PROGRESS BAR SKILLS
// ========================================
const skills = document.querySelectorAll('.skill');

const animateSkills = () => {
    skills.forEach(skill => {
        const progress = skill.querySelector('.progress');
        if (!progress) return;

        const skillTop = skill.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (skillTop < windowHeight - 100 && !progress.dataset.animated) {
            const targetWidth = progress.style.width; // contoh: "90%"
            progress.style.width = '0%';
            progress.dataset.animated = 'true';

            setTimeout(() => {
                progress.style.width = targetWidth;
            }, 200);
        }
    });
};

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

// ========================================
// CONTACT FORM
// ========================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        if (!name || !email || !message) {
            alert('🌸 Mohon isi semua field yang wajib diisi!');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('📧 Mohon masukkan alamat email yang valid!');
            return;
        }

        alert(`💗 Terima kasih ${name}! Pesan Anda telah terkirim. Saya akan merespon segera! ✨`);
        contactForm.reset();
    });
}

// ========================================
// SCROLL REVEAL ANIMATION
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll(
    '.section-title, .project-card, .about-content, .contact-content, ' +
    '.hero-content, .education-content, .skills-content'
).forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(35px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
});

// ========================================
// SMOOTH SCROLL
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('header')?.offsetHeight || 0;
            const targetPosition = target.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// RESIZE HANDLER
// ========================================
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (window.innerWidth > 768 && navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
            document.body.style.overflow = '';
        }
    }, 250);
});

// ========================================
// CONSOLE LOG
// ========================================
console.log('🌸 Portfolio - Gadis Indriani | Aesthetic Pink Theme');
console.log('📚 Kelas: XI RPL 2');
console.log('💻 Jurusan: Rekayasa Perangkat Lunak');
console.log('🖼️  Semua gambar PNG statis (tanpa upload/drag/klik)');
console.log('🔒 profile.png, project1.png, project2.png, project3.png');