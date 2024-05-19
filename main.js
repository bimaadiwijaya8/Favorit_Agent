// memunculkan sidebar
const headerMenu = document.querySelector ('.li-header');

document.querySelector('#menu').onclick = () => {
    headerMenu.classList.toggle('active');
};

// cara menghilangkan sidebar
const hilang = document.querySelector('#menu');

document.addEventListener('click', function (event) {
    if(!hilang.contains(event.target) && !headerMenu.contains(event.target)){
        headerMenu.classList.remove('active');
    }
});

