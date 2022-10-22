window.addEventListener('DOMContentLoaded', () => {
    const headerMenu = document.querySelector('[data-header-menu]'),
    headerOpen = document.querySelector('[data-header-open]'),
    headerClose = document.querySelector('[data-header-close]'),
    header = document.querySelector('header.header');

    function openMenu() {
        [headerOpen, headerClose].forEach(btn => {
            btn.addEventListener('click', () => {
                headerMenu.classList.toggle('header-menu--active');
                headerOpen.classList.toggle('header-hamburger--active');
            });
        });
    }

    function updateScrollHeight() {
        document.documentElement.style.scrollPaddingTop = header.scrollHeight + 'px';
    }

    openMenu();

    updateScrollHeight();

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100 || document.documentElement.scrollTop > 100) {
            header.classList.add('header--scrolled');
        } else if (window.pageYOffset == 0 || document.documentElement.scrollTop == 0) {
            header.classList.remove('header--scrolled');
        }
        updateScrollHeight();
    });
})