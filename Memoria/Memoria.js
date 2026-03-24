const tablero = document.getElementById('tablero');
const movimientosTxt = document.getElementById('movimientos');
const tiempoTxt = document.getElementById('tiempo');
const parejasTxt = document.getElementById('parejas');

// Tus imágenes de las cartas con las rutas corregidas
const imagenes = [
    'img/Carta1.jpg',
    'img/Carta2.jpg',
    'img/Carta3.jpg'
];

// Duplicamos las imágenes para hacer las parejas (6 cartas en total)
let cartasArray = [...imagenes, ...imagenes];
let cartasVolteadas = [];
let parejasEncontradas = 0;
let movimientos = 0;
let tiempo = 0;
let temporizador = null;
let bloqueado = false;

// Función para mezclar cartas (Fisher-Yates)
function mezclarCartas() {
    cartasArray.sort(() => 0.5 - Math.random());
}

// Inicializa el tablero
function iniciarJuego() {
    mezclarCartas();
    tablero.innerHTML = '';
    
    cartasArray.forEach((imgSrc) => {
        const carta = document.createElement('div');
        carta.classList.add('carta');
        carta.dataset.valor = imgSrc; // Guardamos qué imagen es para compararla luego

        const caraFrontal = document.createElement('div');
        caraFrontal.classList.add('cara', 'cara-frontal');
        caraFrontal.style.backgroundImage = `url('${imgSrc}')`;

        const caraTrasera = document.createElement('div');
        caraTrasera.classList.add('cara', 'cara-trasera');

        carta.appendChild(caraFrontal);
        carta.appendChild(caraTrasera);

        carta.addEventListener('click', voltearCarta);
        tablero.appendChild(carta);
    });

    iniciarCronometro();
}

function iniciarCronometro() {
    if (temporizador) clearInterval(temporizador);
    tiempo = 0;
    tiempoTxt.innerText = `Tiempo: 00:00`;
    
    temporizador = setInterval(() => {
        tiempo++;
        const minutos = Math.floor(tiempo / 60).toString().padStart(2, '0');
        const segundos = (tiempo % 60).toString().padStart(2, '0');
        tiempoTxt.innerText = `Tiempo: ${minutos}:${segundos}`;
    }, 1000);
}

function voltearCarta() {
    // Evita clics si el tablero está bloqueado o si tocas la misma carta dos veces
    if (bloqueado) return;
    if (this === cartasVolteadas[0]) return;

    this.classList.add('volteada');
    cartasVolteadas.push(this);

    // Cuando hay dos cartas volteadas, comprobamos si son iguales
    if (cartasVolteadas.length === 2) {
        verificarPareja();
    }
}

function verificarPareja() {
    bloqueado = true; // Bloqueamos clics adicionales
    movimientos++;
    movimientosTxt.innerText = `Movimientos: ${movimientos}`;

    const carta1 = cartasVolteadas[0];
    const carta2 = cartasVolteadas[1];

    if (carta1.dataset.valor === carta2.dataset.valor) {
        // ¡Acertaste!
        parejasEncontradas++;
        parejasTxt.innerText = `Parejas: ${parejasEncontradas}/${imagenes.length}`;
        cartasVolteadas = [];
        bloqueado = false;

        // Comprobar victoria
        if (parejasEncontradas === imagenes.length) {
            clearInterval(temporizador);
            setTimeout(() => {
                alert(`¡Felicidades! Completaste el juego en ${movimientos} movimientos.`);
            }, 500);
        }
    } else {
        // Fallaste, se vuelven a voltear
        setTimeout(() => {
            carta1.classList.remove('volteada');
            carta2.classList.remove('volteada');
            cartasVolteadas = [];
            bloqueado = false;
        }, 1000); // 1 segundo de espera
    }
}

// Arrancamos la primera partida al cargar la página
iniciarJuego();