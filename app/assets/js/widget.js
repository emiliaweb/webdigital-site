window.addEventListener('DOMContentLoaded', () => {
    const widget = {
        top: document.querySelector('[data-widget-top]'),
        trigger: document.querySelector('[data-widget-trigger]')
    }
    
    widget.trigger.addEventListener('click', () => {
        if (widget.top.style.maxHeight) {
            widget.top.style.maxHeight = null;
        } else {
            widget.top.style.maxHeight = widget.top.scrollHeight + "px";
        }
    })
    
})