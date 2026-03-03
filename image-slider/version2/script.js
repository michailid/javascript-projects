const slides = [
    'https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954_640.jpg',
    'https://cdn.pixabay.com/photo/2017/05/08/13/15/spring-bird-2295434_640.jpg',
    'https://cdn.pixabay.com/photo/2024/03/08/08/26/tit-8620213_1280.jpg',
    'https://cdn.pixabay.com/photo/2025/05/04/18/04/robin-9578746_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/10/18/22/07/nature-2865703_1280.jpg'
];

// default first image displayed
document.querySelector('#image-container img').src = slides[0];
// navigation circles creation & functionality
const container = document.querySelector('#navigation-circles');
slides.forEach((img, index) => {
    const circle = document.createElement('span');
    circle.className = 'navigation-circle';
    circle.setAttribute('data-index', index);
    console.log('circle index: ', index);
    circle.addEventListener('click', () => {
        updateSlide(index);
    })
    container.appendChild(circle);
});

// highlight the corresponding nav circle
const circles = document.querySelectorAll('.navigation-circle');
circles[0].classList.add('active');

let i = 0;
document.querySelector('#next-slide-btn').addEventListener('click', () => {
    updateSlide((i + 1) % slides.length);

});

document.querySelector('#previous-slide-btn').addEventListener('click', () => {
    updateSlide((i - 1 + slides.length) % slides.length);
});

function updateSlide(newIndex) {
    i = newIndex;
    document.querySelector('#image-container img').src = slides[i];
    // highlight the corresponding nav circle
    const circles = document.querySelectorAll('.navigation-circle');
    circles.forEach(circle => circle.classList.remove('active'));
    circles[i].classList.add('active');
}
