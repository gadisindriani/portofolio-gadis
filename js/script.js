// ========================================
// PORTFOLIO - GADIS INDRIANI
// AESTHETIC PINK THEME - FULL RESPONSIVE
// ========================================

// ----- MOBILE MENU -----
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
}

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// ----- HEADER SCROLL -----
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});

// ----- ACTIVE NAV LINK -----
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
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

// ----- ANIMATE SKILLS -----
const skills = document.querySelectorAll('.skill');

const animateSkills = () => {
    skills.forEach(skill => {
        const progress = skill.querySelector('.progress');
        if (!progress) return;
        const skillTop = skill.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (skillTop < windowHeight - 100) {
            const width = progress.style.width;
            progress.style.width = '0%';
            setTimeout(() => {
                progress.style.width = width;
            }, 300);
        }
    });
};

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

// ========================================
// UPLOAD FOTO DARI ALBUM
// ========================================

// ----- Upload Foto Profile -----
document.getElementById('uploadProfile')?.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            document.getElementById('profileImg').src = event.target.result;
            // Animasi sukses
            const img = document.getElementById('profileImg');
            img.style.transform = 'scale(0.95)';
            setTimeout(() => {
                img.style.transform = 'scale(1)';
            }, 300);
        };
        reader.readAsDataURL(file);
    }
});

// ----- Upload Foto Project -----
function setupUpload(imgId, inputId) {
    const input = document.getElementById(inputId);
    const img = document.getElementById(imgId);
    
    if (!input || !img) return;
    
    input.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                img.src = event.target.result;
                img.style.opacity = '0.5';
                img.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    img.style.opacity = '1';
                    img.style.transform = 'scale(1)';
                }, 300);
            };
            reader.readAsDataURL(file);
        }
    });
}

// Setup semua upload project
setupUpload('img1', 'upload1');
setupUpload('img2', 'upload2');
setupUpload('img3', 'upload3');

// ----- Drag & Drop -----
function setupDrop(dropId, imgId, inputId) {
    const dropZone = document.getElementById(dropId);
    const img = document.getElementById(imgId);
    const input = document.getElementById(inputId);
    
    if (!dropZone) return;
    
    // Click to upload (selain tombol upload)
    dropZone.addEventListener('click', function(e) {
        if (!e.target.closest('.upload-btn')) {
            input.click();
        }
    });
    
    // Drag over
    dropZone.addEventListener('dragover', function(e) {
        e.preventDefault();
        e.stopPropagation();
        this.classList.add('dragover');
    });
    
    // Drag leave
    dropZone.addEventListener('dragleave', function(e) {
        e.preventDefault();
        e.stopPropagation();
        this.classList.remove('dragover');
    });
    
    // Drop
    dropZone.addEventListener('drop', function(e) {
        e.preventDefault();
        e.stopPropagation();
        this.classList.remove('dragover');
        
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(event) {
                img.src = event.target.result;
                img.style.opacity = '0.5';
                img.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    img.style.opacity = '1';
                    img.style.transform = 'scale(1)';
                }, 300);
            };
            reader.readAsDataURL(file);
        } else {
            alert('🌸 Mohon upload file gambar!');
        }
    });
}

// Setup drag & drop untuk semua project
setupDrop('drop1', 'img1', 'upload1');
setupDrop('drop2', 'img2', 'upload2');
setupDrop('drop3', 'img3', 'upload3');

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
        
        // Validasi email
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

document.querySelectorAll('.section-title, .project-card, .about-content, .contact-content, .hero-content, .education-content, .skills-content').forEach(el => {
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
        // Tutup menu mobile jika layar diperbesar
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
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
console.log('📱 Full Responsive + Upload Foto dari Album');
console.log('💡 Klik ikon kamera atau drag & drop foto untuk mengganti!');