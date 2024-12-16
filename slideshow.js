const images = [
    "gymimages/img694.jpg",
    "gymimages/img853.jpg",
    "gymimages/img439.jpg",
  ];
  
  const imageContainer = document.getElementById('image-container');
  let currentIndex = 0;
  
  function showImage() {
    imageContainer.src = images[currentIndex];
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
  }
  
 
  showImage();
  
  setInterval(nextImage, 3000);