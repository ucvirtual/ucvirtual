document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('contenido').style.display = 'block';
    }, 4000);
});
document.addEventListener('DOMContentLoaded', function() {
    const submenus = document.querySelectorAll('.submenu');

    submenus.forEach(submenu => {
        submenu.addEventListener('mouseover', () => {
            submenu.querySelector('.dropdown').style.display = 'block';
        });

        submenu.addEventListener('mouseout', () => {
            submenu.querySelector('.dropdown').style.display = 'none';
        });
    });
});

/*document.addEventListener("DOMContentLoaded", () => {
    const images = [
        'imagen1.jpg', // Reemplaza con la ruta de tu imagen
        'imagen2.jpg',
        'imagen3.jpg'
    ];

    let currentIndex = 0;

    function changeBackground() {
        document.body.style.backgroundImage = `url(${images[currentIndex]})`;
        currentIndex = (currentIndex + 1) % images.length;
    }

    // Inicializar el fondo y cambiar cada 10 segundos
    changeBackground();
    setInterval(changeBackground, 10000);
});*/
document.addEventListener("DOMContentLoaded", () => {
    const noticias = [
        {
            titulo: "Nueva Carrera Universitaria",
            descripcion: "Se abre la convocatoria para nuestra nueva carrera en Ingeniería en Robótica.",
            fecha: "05/12/2024",
            enlace: "#"
        },
        {
            titulo: "Semana Cultural 2024",
            descripcion: "Participa en las actividades culturales que tenemos preparadas para ti.",
            fecha: "03/12/2024",
            enlace: "#"
        }
    ];

    const contenedorNoticias = document.querySelector(".noticias");
    noticias.forEach(noticia => {
        const div = document.createElement("div");
        div.classList.add("noticia");
        div.innerHTML = `
            <h3>${noticia.titulo}</h3>
            <p>${noticia.descripcion} <a href="${noticia.enlace}">Leer más...</a></p>
            <span class="fecha">Publicado el: ${noticia.fecha}</span>
        `;
        contenedorNoticias.appendChild(div);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario-contacto");
    const mensajeExito = document.getElementById("mensaje-exito");

    formulario.addEventListener("submit", (e) => {
        e.preventDefault(); // Evita el envío real del formulario
        mensajeExito.style.display = "block"; // Muestra el mensaje de éxito
        formulario.reset(); // Limpia los campos del formulario
    });
});
function abrirChat() {
    // Simula abrir una ventana de chat
    alert("Conéctate con nuestro asistente en vivo.");
    // Aquí podrías abrir un iframe o redirigir a una URL del servicio de chat
    // window.open("URL_DEL_SERVICIO_DE_CHAT", "_blank");
}
document.addEventListener("DOMContentLoaded", () => {
    const testimonios = document.querySelectorAll(".testimonio");
    let indiceActual = 0;

    function mostrarSiguienteTestimonio() {
        testimonios[indiceActual].classList.remove("active");
        indiceActual = (indiceActual + 1) % testimonios.length;
        testimonios[indiceActual].classList.add("active");
    }

    setInterval(mostrarSiguienteTestimonio, 5000); // Cambia cada 5 segundos
    testimonios[indiceActual].classList.add("active");
});





