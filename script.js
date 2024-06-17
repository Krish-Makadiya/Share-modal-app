let button = document.querySelector('.share');
let modalSection = document.querySelector('.modal');
let closeBtn = document.querySelector('#closeBtn');

button.addEventListener('click', ()=>{
    modalSection.classList.add("active");
})

closeBtn.addEventListener('click', ()=>{
    modalSection.classList.remove('active');
})