# Juego de Memoria en JavaScript 🧠🃏

Un clásico juego de memoria interactivo desarrollado para poner a prueba y demostrar habilidades en lógica de programación, manipulación del DOM y diseño de interfaz. 

El objetivo es encontrar todas las parejas idénticas en el menor tiempo y número de movimientos posibles.

## 🚀 Características Destacadas

* **Motor Lógico en Vanilla JS:** Implementación del algoritmo de mezcla aleatoria (Fisher-Yates) para garantizar que la posición de las cartas cambie en cada partida.
* **Animaciones 3D:** Efecto de volteo de cartas realista y fluido utilizando las propiedades `transform: rotateY` y `backface-visibility` en CSS puro.
* **Control de Estado:** Sistema de bloqueo temporal (`bloqueado = true/false`) durante la verificación de parejas para evitar bugs si el usuario hace clics rápidos.
* **Métricas en Tiempo Real:** Cronómetro integrado y contador de movimientos que se actualizan dinámicamente mediante manipulación del DOM.

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructura semántica del tablero y los marcadores.
* **CSS3:** Uso de CSS Grid para un tablero perfectamente alineado y manejo de perspectivas 3D para las cartas.
* **JavaScript:** Lógica central, manejo de arrays, temporizadores (`setInterval`) y eventos de usuario.

## 📂 Estructura del Proyecto

- `index.html`: Documento principal de la vista.
- `style.css`: Hoja de estilos con la paleta de colores y transiciones.
- `Memoria.js`: Script principal con las reglas del juego.
- `/img`: Directorio con todos los assets gráficos (Fondo, reverso y caras de las cartas).

## 🕹️ Cómo Jugar

1. Accede a la [Demo en vivo en GitHub Pages] 2. Haz clic en cualquier carta para descubrir su imagen.
3. Haz clic en una segunda carta para buscar su pareja.
4. Si son iguales, permanecerán bocarriba. Si son distintas, se volverán a ocultar tras un segundo.
5. ¡Completa el tablero rápidamente y con los mínimos movimientos posibles!

---
*Desarrollado por Hernán Fernández*
