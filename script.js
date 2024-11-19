let currentSlide = 0;
const slides = document.querySelectorAll('.carousel img');
const totalSlides = slides.length;
const carousel = document.querySelector('.carousel');

function updateSlide() {
  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides; 
  updateSlide();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; 
  updateSlide();
}


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


function toggleOverlay(dotNumber) {

    const overlays = document.querySelectorAll('.dot-over');
    
    
    const currentOverlay = document.getElementById(`dot-over-${dotNumber}`);
    
    
    overlays.forEach(over => {
      if (over !== currentOverlay) {
        over.classList.remove('active');
      }
    });
    
    
    if (currentOverlay) {
      currentOverlay.classList.toggle('active');
    }
  }
  
  
  function viewMap() {

    window.location.href = "map.html";
  }
  
  
  document.addEventListener("click", (event) => {
    const isDot = event.target.closest('.dot');
    if (!isDot) {
      document.querySelectorAll('.dot-over').forEach(over => {
        over.classList.remove('active');
      });
    }
  });
  
  