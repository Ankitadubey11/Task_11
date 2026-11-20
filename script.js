
// Store all images
let images = [
    "https://picsum.photos/id/10/600/400",
    "https://picsum.photos/id/15/600/400",
    "https://picsum.photos/id/28/600/400",
    "https://picsum.photos/id/29/600/400"
];

// Current image index
let currentIndex = 0;

// Get HTML elements
let galleryImage = document.getElementById("galleryImage");
let imageNumber = document.getElementById("imageNumber");

// Function to display image
function showImage() {

    galleryImage.src = images[currentIndex];

    imageNumber.innerText =
        `Image ${currentIndex + 1} of ${images.length}`;
}

// Next button function
function nextImage() {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    showImage();
}

// Previous button function
function previousImage() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    showImage();
}
