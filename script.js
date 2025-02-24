// Intersection Observer with staggered animations
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 150);
        }
    });
}, { threshold: 0.1 });

// Dynamic Theme Switching
document.addEventListener('DOMContentLoaded', function() {
    // Section Scroll Reveal
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Smooth Scrolling for Navigation
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Parallax Background Effect
    window.addEventListener('scroll', function() {
        const hero = document.querySelector('.hero');
        let scrollPosition = window.pageYOffset;
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    });

    // Interactive Hover Effects
    const interactiveElements = document.querySelectorAll('.skill-item, .project-item, .blog-item, .social-icons .icon');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
            this.style.boxShadow = '0 0 15px rgba(97, 218, 251, 0.5)';
        });

        element.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });

    // Dynamic Background Color Change
    const dynamicBackgroundSections = document.querySelectorAll('#about, #experience, #skills, #education, #blogs, #projects');
    
    dynamicBackgroundSections.forEach(section => {
        section.addEventListener('mousemove', function(e) {
            const rect = section.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            section.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(97, 218, 251, 0.1), rgba(25, 25, 26, 0.8))`;
        });

        section.addEventListener('mouseleave', function() {
            section.style.background = 'linear-gradient(to right, #1b1b32, #0a0a23)';
        });
    });

    // Typing Effect for Code Snippet
    const codeSnippet = document.querySelector('.code-snippet pre');
    const codeText = codeSnippet.textContent;
    codeSnippet.textContent = '';

    function typeWriter(text, element, index = 0) {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            setTimeout(() => typeWriter(text, element, index + 1), 50);
        }
    }

    typeWriter(codeText, codeSnippet);

    // Button Pulse Effect
    const buttons = document.querySelectorAll('.button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.animation = 'pulse 1s infinite';
        });

        button.addEventListener('mouseleave', function() {
            this.style.animation = 'none';
        });
    });

    // Add keyframe for pulse animation
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
    `, styleSheet.cssRules.length);
});
const themeToggle = document.createElement('button');
themeToggle.id = 'theme-toggle';
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('light-theme');
});

// Form Handling
const contactForm = document.createElement('form');
contactForm.innerHTML = `
    <input type="text" placeholder="Name" required>
    <input type="email" placeholder="Email" required>
    <textarea placeholder="Message" required></textarea>
    <button type="submit">Send</button>
`;

// Lazy Loading Images
const lazyImages = document.querySelectorAll('img[loading="lazy"]');
const imgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            imgObserver.unobserve(img);
        }
    });
});