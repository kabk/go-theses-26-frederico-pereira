const helloWorld = () => {
  console.log("Hello World");
};

helloWorld();

// Rotating image on scroll
const rotatingImage = document.getElementById('rotating-image');

if (rotatingImage) {
  window.addEventListener('scroll', () => {
    // Calculate rotation based on scroll position
    // Each pixel scrolled = 1 degree rotation
    const scrollTop = window.scrollY;
    const rotation = scrollTop % 360; // Keep rotation between 0-360
    
    rotatingImage.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
  });
}
