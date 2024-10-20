function toggleMenu() {
    const menu = document.getElementById('menu');
    const hamburger = document.querySelector('.hamburger');
    
    // Toggle class to show/hide the menu
    menu.classList.toggle('active');
    menu.classList.toggle('hidden');
    
    // Toggle class on hamburger (optional for animation)
    hamburger.classList.toggle('active');
}
