window.addEventListener('DOMContentLoaded', () => {
    const headerMenu = document.querySelector('[data-header-menu]'),
      headerOpen = document.querySelector('[data-header-open]'),
      headerClose = document.querySelector('[data-header-close]');

    function openMenu() {
        [headerOpen, headerClose].forEach(btn => {
            btn.addEventListener('click', () => {
                headerMenu.classList.toggle('header-menu--active');
                headerOpen.classList.toggle('header-hamburger--active');
            });
        });
    }

    openMenu();
})