window.onload = init;

function init() {
    // Animacion del cursos
    const playButton = document.querySelector('.play_button');
    const sectionVideo = document.getElementById('section_video');

    sectionVideo.addEventListener('mousemove', (e) => {
        let left = e.pageX;
        let top = e.pageY;

        playButton.style.left = left + 'px';
        playButton.style.top = top + 'px';
    })

    sectionVideo.addEventListener('mouseout', () => {
        playButton.style.left = 55 + '%';
        //cursor.style.top = (50 - window.scrollY) + '%';
        playButton.style.top = 60  + '%';
    })


    const myVideo = document.getElementById("video");

    sectionVideo.addEventListener('mouseup', () => {
        if (myVideo.paused) {
            myVideo.play();
            playButton.style.display = 'none';
        } else {
            myVideo.pause();
            playButton.style.display = 'flex';
        }
    })
}