/**
 * ByteSpace - Main JS
 * Handles global interactions like navbar scroll effect, mobile menu, and scroll reveal animations.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    // 2. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.querySelector('.navbar__nav');
    const navActions = document.querySelector('.navbar__actions');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            navActions.classList.toggle('open');
            mobileMenuBtn.classList.toggle('active'); // You can add CSS for 'active' to animate hamburger to X
        });
    }

    // 3. Scroll Reveal Animation (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once revealed
                observer.unobserve(entry.target);
            }
        });
    };
    
    const revealOptions = {
        threshold: 0.15, // Trigger when 15% of element is visible
        rootMargin: "0px 0px -50px 0px"
    };
    
    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);
    
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
    
    // 4. Simple Course Filter Tabs (Home Page)
    const tabBtns = document.querySelectorAll('.tab-btn');
    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Remove active class from all
                tabBtns.forEach(b => b.classList.remove('active'));
                // Add active to clicked
                e.target.classList.add('active');
                
                // Note: Actual filtering logic would go here, 
                // e.g. hiding/showing course cards based on data attributes.
            });
        });
    }
});
