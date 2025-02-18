document.addEventListener('DOMContentLoaded', function() {
    const bubbles = document.querySelectorAll('.bubble');
    
    function showBubbles() {
        bubbles.forEach((bubble, index) => {
            setTimeout(() => {
                bubble.classList.add('show');
            }, index * 300); // Stagger the animation by 200ms for each bubble
        });
    }

    // Slight delay before starting the animation
    setTimeout(showBubbles, 200);
});


document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', () => {
        console.log("hello world")
        body.classList.toggle('dark-mode');
        
        // Save preference to localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    // Check for saved preference on page load
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
    };
})
