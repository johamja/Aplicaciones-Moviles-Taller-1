document.addEventListener('DOMContentLoaded', (event) => {
    // Manejo del elemento arrastrable
    const draggable = document.querySelector('#draggable');
    
    draggable.addEventListener('mousedown', function(e) {
        draggable.style.position = 'absolute';
        moveAt(e.pageX, e.pageY);
        
        function moveAt(pageX, pageY) {
            draggable.style.left = pageX - draggable.offsetWidth / 2 + 'px';
            draggable.style.top = pageY - draggable.offsetHeight / 2 + 'px';
        }
        
        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        draggable.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            draggable.onmouseup = null;
        };
    });

    draggable.ondragstart = function() {
        return false;
    };

    // Efecto de cursor y estilo en hover para botones y el elemento arrastrable
    const button = document.querySelector('button');
    [button, draggable].forEach(element => {
        element.addEventListener('mouseover', function() {
            element.style.cursor = 'pointer';
            element.style.backgroundColor = '#252422';
            element.style.color = '#f4f4f4';
        });
        element.addEventListener('mouseout', function() {
            element.style.backgroundColor = '';
            element.style.color = '';
        });
    });

    // Manejo del efecto de desplazamiento en el encabezado
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#252422';
            header.style.color = '#f4f4f4';
        } else {
            header.style.backgroundColor = '';
            header.style.color = '';
        }
    });

    // Mostrar más noticias
    document.getElementById('view-more').addEventListener('click', function() {
        const moreNews = document.getElementById('more-news');
        moreNews.classList.toggle('hidden');
        this.textContent = moreNews.classList.contains('hidden') ? 'VIEW ALL' : 'VIEW LESS';
    });
    
    // Navegación automática a la sección "Contact Us" después de 10 segundos
    setTimeout(function() {
        document.querySelector('a[href="#contact"]').click();
    }, 10000); // 10000 milisegundos = 10 segundos

    // Efectos en el elemento de vídeo
    const video = document.querySelector('video');
    if (video) {
        video.addEventListener('mouseover', function() {
            video.style.cursor = 'pointer';
            video.style.backgroundColor = '#252422';
            video.style.color = '#f4f4f4';
        });
        video.addEventListener('mouseout', function() {
            video.style.backgroundColor = '';
            video.style.color = '';
        });

        video.addEventListener('play', function() {
            document.body.style.backgroundColor = '#252422';
        });

        video.addEventListener('pause', function() {
            document.body.style.backgroundColor = '';
        });

        video.addEventListener('ended', function() {
            document.body.style.backgroundColor = '';
        });
    }
});
