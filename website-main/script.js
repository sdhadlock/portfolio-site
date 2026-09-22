// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Add mobile menu button if on mobile
    const nav = document.querySelector('nav .nav-container');
    if (nav && window.innerWidth <= 768) {
        const navLinks = nav.querySelector('.nav-links');
        if (navLinks) {
            // Create hamburger button
            const menuButton = document.createElement('button');
            menuButton.className = 'menu-toggle';
            menuButton.innerHTML = '☰';
            menuButton.style.cssText = 'background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #1a1a1a; display: none;';
            
            // Add click handler
            menuButton.addEventListener('click', function() {
                navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            });
            
            // Insert before nav links
            nav.insertBefore(menuButton, navLinks);
            
            // Show/hide based on screen size
            window.addEventListener('resize', function() {
                if (window.innerWidth <= 768) {
                    menuButton.style.display = 'block';
                    navLinks.style.display = 'none';
                    navLinks.style.flexDirection = 'column';
                    navLinks.style.position = 'absolute';
                    navLinks.style.top = '100%';
                    navLinks.style.left = '0';
                    navLinks.style.right = '0';
                    navLinks.style.background = '#ffffff';
                    navLinks.style.padding = '1rem';
                    navLinks.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                } else {
                    menuButton.style.display = 'none';
                    navLinks.style.display = 'flex';
                    navLinks.style.flexDirection = 'row';
                    navLinks.style.position = 'static';
                    navLinks.style.background = 'transparent';
                    navLinks.style.padding = '0';
                    navLinks.style.boxShadow = 'none';
                }
            });
            
            // Initial setup
            if (window.innerWidth <= 768) {
                menuButton.style.display = 'block';
                navLinks.style.display = 'none';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.background = '#ffffff';
                navLinks.style.padding = '1rem';
                navLinks.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }
        }
    }
    
    // Highlight active page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav .nav-links a');
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.style.color = '#b31b1b';
            link.style.fontWeight = '600';
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add fade-in animation on scroll (optional enhancement)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe cards for fade-in effect
    document.querySelectorAll('.card, .member-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

