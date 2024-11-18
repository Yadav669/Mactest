function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("open");
}

function closeMenu() {
    const menu = document.getElementById("menu");
    menu.classList.remove("open");
}

document.querySelector('.right .arrow_forward_ios').addEventListener('click', function() {
    const heroImage = document.getElementById('heroImage');
    const heroVideo = document.getElementById('heroVideo');
    
    heroImage.style.display = 'none'; 
    heroVideo.style.display = 'block'; 
    
    heroVideo.play();
});
  
document.querySelector('.left .arrow_back_ios').addEventListener('click', function() {
    const heroImage = document.getElementById('heroImage');
    const heroVideo = document.getElementById('heroVideo');
    
    heroVideo.pause(); 
    heroVideo.currentTime = 0; 
    
    heroVideo.style.display = 'none'; 
    heroImage.style.display = 'block'; 
});
