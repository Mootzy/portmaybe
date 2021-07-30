var colors = ['#40e0d0', '#ff8c00', '#ff0080'];
var blobs = document.querySelectorAll("#background path");

function colorBlob (blob) {
    blob.style.fill = colors[Math.floor(Math.random() * colors.length)];
}

blobs.forEach(blob => {
    blob.addEventListener('animationiteration', () => {
        colorBlob(blob);
    });
    colorBlob(blob);
});

