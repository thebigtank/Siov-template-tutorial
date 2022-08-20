export default function sideMenuDropDown() {
    let sideNav = document.querySelector('.side__nav');

    if (sideNav) {
        let menuItems = sideNav.querySelectorAll('.menu__item');
        
        menuItems.forEach((item) => {
            item.addEventListener('click', function (e) {
                item.classList.toggle('active');
            })
        });
    }
}