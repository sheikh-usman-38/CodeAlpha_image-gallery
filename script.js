const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    "image6.jpg"
];

let currentIndex = 0; // Start from the first image
const currentImage = document.getElementById("currentImage");
const nextButton = document.getElementById("nextButton");

function showNextImage() {
    // Update the current index to show the next image
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image if at the end

    // Animate the current image out
    gsap.to(currentImage, {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        onComplete: () => {
            // Change the image source
            currentImage.src = images[currentIndex];

            // Animate the new image in
            gsap.fromTo(currentImage, {
                opacity: 0,
                scale: 1.2
            }, {
                opacity: 1,
                scale: 1,
                duration: 0.5
            });
        }
    });
}

// Add event listener to the button
nextButton.addEventListener("click", showNextImage);
