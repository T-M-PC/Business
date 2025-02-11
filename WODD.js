document.addEventListener('DOMContentLoaded', function() {
    // Handle mobile menu toggle
    const menuItems = document.querySelectorAll('.main-categories > li');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                const subMenu = this.querySelector('.sub-categories');
                if (subMenu) {
                    e.preventDefault();
                    subMenu.style.display = 
                        subMenu.style.display === 'block' ? 'none' : 'block';
                }
            }
        });
    });
});
