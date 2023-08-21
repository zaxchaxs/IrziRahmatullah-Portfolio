
// const humburgerButton = document.querySelector('#hamburger');
// const lineHumberger = document.querySelectorAll('.humBut');


// humburgerButton.onclick = () => {
//     lineHumberger.forEach(line => {
//         line.classList.toggle('rotate-45')
//     });
// }

// HAmburger 
function toggleBtn() {
    let menuBtn = document.getElementById('hamburger');
    let navbarList = document.getElementById('navList');
    menuBtn.classList.toggle('active');
    const classNavBtn = [
        'bg-white', 'border-2', 'shadow-lg', 'rounded-lg', 'top-full', 'right-0', '-right-52'
    ];
    classNavBtn.forEach(className => {
        navbarList.classList.toggle(className);
    });
}


// Animate fade scroll down
const fadeElements = document.querySelectorAll('.fade-element');
function checkFade() {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;

        if(elementTop < window.innerHeight && elementBottom>=0){
            element.classList.add('show');
        }else{
            element.classList.remove('show')
        }
    })
}


