
const photos = document.querySelectorAll('.photo');
const drawings = document.querySelectorAll('.drawing');
const paintings = document.querySelectorAll('.painting');

const paintingButton = document.querySelectorAll('.paintingButton');
const photoButton = document.querySelectorAll('.photoButton');
const drawingButton = document.querySelectorAll('.drawingButton');

function showPhotos() {
    photos.forEach(element => {
        element.classList.remove('hideElems');

    })
    drawings.forEach(element => {
        element.classList.add('hideElems');
    })
    paintings.forEach(element => {
        element.classList.add('hideElems');
    })
    photoButton.forEach(element => {
        element.classList.add('boldTitle');
    })
    paintingButton.forEach(element => {
        element.classList.remove('boldTitle');
    })
    drawingButton.forEach(element => {
        element.classList.remove('boldTitle');
    })
}

function showDrawings() {
    drawings.forEach(element => {
        element.classList.remove('hideElems');

    })
    photos.forEach(element => {
        element.classList.add('hideElems');
    })
    paintings.forEach(element => {
        element.classList.add('hideElems');
    })
    photoButton.forEach(element => {
        element.classList.remove('boldTitle');
    })
    paintingButton.forEach(element => {
        element.classList.remove('boldTitle');
    })
    drawingButton.forEach(element => {
        element.classList.add('boldTitle');
    })
}

function showPaintings() {
    paintings.forEach(element => {
        element.classList.remove('hideElems');

    })
    drawings.forEach(element => {
        element.classList.add('hideElems');
    })
    photos.forEach(element => {
        element.classList.add('hideElems');
    })
    photoButton.forEach(element => {
        element.classList.remove('boldTitle');
    })
    paintingButton.forEach(element => {
        element.classList.add('boldTitle');
    })
    drawingButton.forEach(element => {
        element.classList.remove('boldTitle');
    })
}

function togglePhoto() {
    photos.forEach(element => {
        element.classList.toggle('hideElems');
    })
    photoButton.forEach(element => {
        element.classList.toggle('boldTitle');
    })
}

function togglePaint() {
    paintings.forEach(element => {
        element.classList.toggle('hideElems');
    })
    paintingButton.forEach(element => {
        element.classList.toggle('boldTitle');
    })
}

function toggleDrawing() {
    drawings.forEach(element => {
        element.classList.toggle('hideElems');
    })
    drawingButton.forEach(element => {
        element.classList.toggle('boldTitle');
    })
}

function photoClick() {
    sessionStorage.setItem('currentArt', 'photo');
    console.log("set to photo");
}

function drawClick() {
    sessionStorage.setItem('currentArt', 'drawing');
    console.log("set to drawing");
}

function paintClick() {
    sessionStorage.setItem('currentArt', 'painting');
    console.log("set to paint");
}
function reset() {
    sessionStorage.setItem('currentArt', 'all');
    console.log("set to all");
}

document.addEventListener('DOMContentLoaded', function() {
    // when works page is loaded
    // check what currentArt is
    let curr = sessionStorage.getItem('currentArt');
    console.log(curr);
    if (curr) { 
        // show the art of currentArt
        switch (curr) {
            case 'photo':
                togglePhoto();
                break;
            case 'drawing':
                toggleDrawing();
                break;
            case 'painting':
                togglePaint();
                break;
            case 'all':
                // if no currentArt, show all
                togglePaint();
                toggleDrawing();
                togglePhoto();
        }
    }  
})