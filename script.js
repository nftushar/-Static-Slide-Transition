    // Variables
    const tabLink = document.querySelectorAll('#tabs-section .tab-link');
    const tabBody = document.querySelectorAll('#tabs-section .tab-body');
    let timerOpacity;

    // Toggle Class
    const init = () => {
        // Menu Click
        tabLink.forEach(function (link) {
            link.addEventListener('click', function (e) {
                // Prevent Default
                e.preventDefault();
                e.stopPropagation();

                // Clear Timers
                window.clearTimeout(timerOpacity);

                // Toggle Class Logic
                // Remove Active Classes
                tabLink.forEach(function (link) {
                    link.classList.remove('active');
                    link.parentElement.classList.remove('active');
                });
                tabBody.forEach(function (body) {
                    body.classList.remove('active');
                    body.classList.remove('active-content');
                });

                // Add Active Classes
                this.classList.add('active');
                this.parentElement.classList.add('active');
                document.querySelector(this.getAttribute('href')).classList.add('active');

                // Opacity Transition Class
                timerOpacity = setTimeout(() => {
                    document.querySelector(this.getAttribute('href')).classList.add('active-content');
                }, 50);
            });
        });
    };

    // Document Ready
    document.addEventListener('DOMContentLoaded', function () {
        init();
    });
