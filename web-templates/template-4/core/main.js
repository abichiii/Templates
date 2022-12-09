const burger = document.getElementById('burger');
const nav = document .getElementById('navmobile');
burger.addEventListener('click', () => {
    nav.classList.toggle('reveal');
})