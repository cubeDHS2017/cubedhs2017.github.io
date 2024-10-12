window.addEventListener('scroll', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if the timeline item is in the viewport
        if (rect.top >= 0 && rect.top <= windowHeight * 0.5) {
            item.classList.add('in-view');
        } else {
            item.classList.remove('in-view');
        }
    });
});
