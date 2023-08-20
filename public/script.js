
// const humburgerButton = document.querySelector('#hamburger');
// const lineHumberger = document.querySelectorAll('.humBut');


// humburgerButton.onclick = () => {
//     lineHumberger.forEach(line => {
//         line.classList.toggle('rotate-45')
//     });
// }

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