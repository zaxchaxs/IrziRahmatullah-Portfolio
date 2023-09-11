
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
        'bg-white', 'shadow-lg', 'rounded-lg', 'top-full', 'right-0', 'hidden'
    ];
    classNavBtn.forEach(className => {
        navbarList.classList.toggle(className);
    });
}


// More Button for Sertificate
function moreSertif() {
    const moreBtn = document.querySelector('#more-button-sertif');
    let moreSertif = document.getElementById('more-sertif');
    const classMoreSertif = ['md:hidden', 'lg:hidden', 'hidden'];
    classMoreSertif.forEach(classes => {
        moreSertif.classList.toggle(classes)
        moreBtn.classList.toggle(classes)
    })
}

// More button for Portfolio
function morePort() {
    const moreBtn = document.querySelector('#more-button-port');
    let moreSertif = document.getElementById('more-port');
    const classMoreSertif = ['md:hidden', 'lg:hidden', 'hidden'];
    classMoreSertif.forEach(classes => {
        moreSertif.classList.toggle(classes)
        moreBtn.classList.toggle(classes)
    })
}
