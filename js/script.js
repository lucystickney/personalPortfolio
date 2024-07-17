
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

