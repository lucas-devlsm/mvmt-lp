document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.hero-video video');
    
    // Ensure video plays
    if (video) {
        video.play().catch(function(error) {
            console.log("Video autoplay failed:", error);
        });
    }
});
