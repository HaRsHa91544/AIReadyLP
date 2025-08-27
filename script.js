document.addEventListener('DOMContentLoaded', () => {
    const stickyCtaBar = document.querySelector('.sticky-cta-bar');
    const heroSection = document.querySelector('.hero-section');

    if (stickyCtaBar && heroSection) {
        // Set an offset to show the bar after a certain scroll distance
        const offset = heroSection.offsetHeight / 2;

        window.addEventListener('scroll', () => {
            if (window.scrollY > offset) {
                stickyCtaBar.classList.add('is-visible');
            } else {
                stickyCtaBar.classList.remove('is-visible');
            }
        });
    }
    
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionContainer = item.querySelector('.faq-question-container');
        questionContainer.addEventListener('click', () => {
            // Check if this item is already active
            const isActive = item.classList.contains('active');

            // Close all other active items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle the active class on the clicked item
            item.classList.toggle('active');
        });
    });
});
