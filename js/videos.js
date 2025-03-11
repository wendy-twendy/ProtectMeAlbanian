// Video fullscreen functionality
document.addEventListener('DOMContentLoaded', function() {
    const videoItems = document.querySelectorAll('.video-item');
    const videoFullscreen = document.querySelector('.video-fullscreen');
    const fullscreenVideo = videoFullscreen.querySelector('video');
    const closeButton = document.querySelector('.video-fullscreen-close');

    // Open fullscreen when clicking on a video
    videoItems.forEach(item => {
        item.addEventListener('click', function() {
            const videoSrc = this.getAttribute('data-video');
            fullscreenVideo.innerHTML = `<source src="${videoSrc}" type="video/mp4">`;
            fullscreenVideo.load();
            videoFullscreen.classList.add('active');
            fullscreenVideo.play();
        });
    });

    // Close fullscreen when clicking the close button
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            videoFullscreen.classList.remove('active');
            fullscreenVideo.pause();
        });
    }

    // Close fullscreen when clicking outside the video
    videoFullscreen.addEventListener('click', function(e) {
        if (e.target === videoFullscreen) {
            videoFullscreen.classList.remove('active');
            fullscreenVideo.pause();
        }
    });

    // Close fullscreen when pressing ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && videoFullscreen.classList.contains('active')) {
            videoFullscreen.classList.remove('active');
            fullscreenVideo.pause();
        }
    });
});
