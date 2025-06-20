// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Website loaded successfully!');
   
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-container')) {
            navLinks.classList.remove('active');
        }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                navLinks.classList.remove('active');
            }
        });
    });

    // WhatsApp send functionality for consult form
    const consultForm = document.querySelector('.consult-form');
    if (consultForm) {
        consultForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log("sadas")
            const name = consultForm.querySelector('.consult-input').value.trim();
            const message = consultForm.querySelector('.consult-textarea').value.trim();
            if (!name && !message) return;
            const phone = '994559409565';
            const text = encodeURIComponent(`Ad, soyad: ${name}\nMesaj: ${message}`);
            const url = `https://wa.me/${phone}?text=${text}`;
            window.open(url, '_blank');
        });
    }

    // Java yüklə button opens download link in new tab
    const javaBtn = document.querySelector('.hero-btn');
    if (javaBtn) {
        javaBtn.addEventListener('click', function() {
            window.open('https://www.java.com/en/download/manual.jsp', '_blank');
        });
    }

    // Təlimə qoşul button opens WhatsApp with a pre-filled message
    const joinBtn = document.querySelector('.join-btn');
    if (joinBtn) {
        joinBtn.addEventListener('click', function() {
            const phone = '994559409565';
            const text = encodeURIComponent('Salam, Java təliminə qoşulmaq istəyirəm.');
            const url = `https://wa.me/${phone}?text=${text}`;
            window.open(url, '_blank');
        });
    }

    // Make desktop Göndər button submit the form
    const consultBtnDesktop = document.querySelector('.consult-btn-desktop');
    if (consultBtnDesktop && consultForm) {
        consultBtnDesktop.addEventListener('click', function(e) {
            e.preventDefault();
            consultForm.requestSubmit();
        });
    }
}); 