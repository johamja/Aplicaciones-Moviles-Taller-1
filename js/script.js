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
        playButton.style.top = 60 + '%';
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

    document.addEventListener('scroll', (e) => {
        const header = document.querySelector('header');
        const a = document.querySelectorAll('header nav ul li a');
        const logo = document.querySelector('header #logo svg');
        const menu = document.querySelector('header #menu a svg');

        if (window.scrollY > 0) {
            header.style.backgroundColor = 'var(--color-background)';
            a.forEach(value => {
                value.style.color = 'var(--color-text)';
            })
            logo.style.fill = 'var(--color-text)';
            menu.style.fill = 'var(--color-text)';
        } else {
            header.style.backgroundColor = 'transparent';
            a.forEach(value => {
                value.style.color = 'white';
            })
            logo.style.fill = 'var(--color-background)';
            menu.style.fill = 'var(--color-background)';
        }
    })
}