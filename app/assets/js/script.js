// this script is global and should be added to all pages

function addScript(src, async = false) {
    const script = document.createElement('script');
    script.src = src;
    script.async = async;
    document.body.append(script);
}

addScript('https://unpkg.com/aos@2.3.1/dist/aos.js');
addScript('assets/js/aos-init.js');

window.addEventListener('DOMContentLoaded', () => {
    addScript('assets/js/widget.js');
})