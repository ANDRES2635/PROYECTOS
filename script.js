// Modo Oscuro/Claro
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeToggle.textContent = body.classList.contains('dark-mode') ? 'light mode' : 'Dark mode';
});

// Modal de proyectos
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');

const projectDetails = {
    project1: {
        title: "Proyecto 1",
        description: "Descripción completa del Proyecto 1. Aquí puedes agregar todos los detalles que quieras mostrar."
    },
    project2: {
        title: "Proyecto 2",
        description: "Descripción completa del Proyecto 2. Aquí puedes agregar todos los detalles que quieras mostrar."
    },
    Contact: {
        title: "Proyecto 3",
        description: "Descripción completa del Proyecto 3. Aquí puedes agregar todos los detalles que quieras mostrar."
    }
};
//modal de proyectos
function openModal(project) {
    modal.style.display = 'block';
    modalTitle.textContent = projectDetails[project].title;
    modalDescription.textContent = projectDetails[project].description;
}

function closeModal() {
    modal.style.display = 'none';
}
 //CAROUSEL LENGUAJE PROGRAMMING
 $(document).ready(function(){
    $('.languages-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Cierra el menú al hacer clic en un enlace
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
});



// Cerrar modal al hacer clic fuera del contenido
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}
