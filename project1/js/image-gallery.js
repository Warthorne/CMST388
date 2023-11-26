// Function to handle thumbnail click event
function selectThumbnail(thumbnailIndex, imageSrc, caption) {
    // Remove border from all thumbnails
    let thumbnails = document.querySelectorAll('.thumbnails img');
    for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].classList.remove('selected');
    }

    // Add border to the selected thumbnail
    document.getElementById(`thumbnail${thumbnailIndex}`).classList.add('selected');

    // Display the selected thumbnail in the large image area
    document.getElementById('largeImage').src = imageSrc;

    // Display the caption
    document.getElementById('imageCaption').innerText = caption;
}

// Function to display caption over thumbnail on hover
function displayCaption(thumbnailIndex, caption) {
    document.getElementById(`caption${thumbnailIndex}`).innerText = caption;
    document.getElementById(`caption${thumbnailIndex}`).style.display = "block";
}

// Function to hide caption when mouse leaves the thumbnail
function hideCaption() {
    let captions = document.querySelectorAll('.caption');
    captions.forEach(caption => {
        caption.style.display = "none";
    });
}
