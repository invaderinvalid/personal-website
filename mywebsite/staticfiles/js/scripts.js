document.addEventListener('DOMContentLoaded', () => {
    // Typing animation
    const typingElement = document.getElementById('typing-animation');
    const text = "Hello,I'm Void...";
    let index = 0;

    function typeText() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 100);
        }
    }

    typeText();

    // Scroll animations
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Tech stack icons animation
    const techIcons = document.querySelectorAll('.tech-icons img');
    let currentIndex = 0;

    function rotateIcons() {
        techIcons[currentIndex].style.transform = 'scale(1)';
        currentIndex = (currentIndex + 1) % techIcons.length;
        techIcons[currentIndex].style.transform = 'scale(1.1)';
    }

    setInterval(rotateIcons, 2000);

    techIcons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            clearInterval(rotateInterval);
        });

        icon.addEventListener('mouseout', () => {
            rotateInterval = setInterval(rotateIcons, 2000);
        });

        icon.addEventListener('click', () => {
            const projectUrl = icon.getAttribute('data-project');
            if (projectUrl) {
                window.location.href = projectUrl;
            }
        });
    });
});