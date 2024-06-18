let button = document.querySelector('.share');
let modalSection = document.querySelector('.modal');
let closeBtn = document.querySelector('#closeBtn');
let overlay = document.querySelector('.overlay');

button.addEventListener('click', ()=>{
    modalSection.classList.add("active");
    overlay.classList.add("overlay-active");
})

closeBtn.addEventListener('click', ()=>{
    modalSection.classList.remove('active');
    overlay.classList.remove("overlay-active");
})

overlay.addEventListener('click', ()=>{
    modalSection.classList.remove('active');
    overlay.classList.remove("overlay-active");
})