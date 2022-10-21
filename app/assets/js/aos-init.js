//remove delay on mobile devices
['DOMContentLoaded', 'resize', 'load'].forEach(e => {
    window.addEventListener(e, () => {
        if (window.matchMedia('(max-width: 1023px)').matches) {
            document.querySelectorAll('[data-aos-delay]').forEach(item => {
                item.removeAttribute('data-aos-delay');
            })
        } 
    })
})

AOS.init({
    duration: 1000,
});
