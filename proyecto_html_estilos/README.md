# Explicación de los cambios: Del boceto inicial a la web final

En este documento quiero resumir de forma sencilla cómo ha cambiado el proyecto desde la primera entrega (que era solo el esqueleto en HTML limpio) hasta esta segunda versión, donde ya he metido **Tailwind CSS**, mi propio **CSS personalizado** y un poco de **JavaScript**.

El objetivo principal ha sido pasar de una web plana y desordenada a una página web moderna, atractiva (con un diseño en modo oscuro) y que se adapte perfectamente a las pantallas de los móviles.

---

## 1. Mejoras en la cabecera (Head) y tipografía
* **Idiomas:** Corregí el código para avisar al navegador de que la web está en español (`lang="es"`).
* **Herramientas:** Conecté **Tailwind CSS** para usar sus clases rápidas y añadí la fuente de Google *Space Grotesk*, que le da un toque mucho más tecnológico a los textos.

---

## 2. Organización con variables en CSS
Para no volverme loco cambiando colores o tamaños de letra uno a uno, creé una lista de "variables" al principio de mi archivo CSS. Así, el color azul principal (`#3B82F6`), los fondos oscuros y los tamaños de letra están guardados en un solo sitio. Si quiero cambiar el diseño en el futuro, solo tengo que tocar esa lista.

Además, configuré el CSS para que las letras cambien de tamaño automáticamente si estás viendo la web desde un móvil, una tablet o un ordenador.

---

## 3. Cambios en el diseño de la página (HTML 1 vs. HTML 2)

Aquí le muestro los cambios más importantes que hice en el cuerpo de la web:

### 📱 Un menú que se esconde en el móvil
* **Antes:** Los enlaces del menú salían siempre como una lista vertical que ocupaba mucho espacio en la pantalla.
* **Ahora:** He puesto el nombre de la academia en texto limpio y añadí un **botón de tres rayas (☰)**. En el móvil, el menú está oculto y solo se abre si pulsas ese botón. También añadí un menú desplegable nativo para la sección "Formaciones" usando las etiquetas `<details>` y `<summary>`.

### 📦 El contenido ya no se deforma
* **Antes:** Si abrías la web en una pantalla gigante, los textos se estiraban de lado a lado y eran incómodos de leer.
* **Ahora:** Creé una clase llamada `.container-global`. Su único trabajo es centrar la página y ponerle un tope de ancho (máximo 1200 píxeles) para que todo se vea ordenado y en su sitio.

### 🍱 Tarjetas de cursos y noticias en filas y columnas
* **Antes:** Todos los cursos y noticias salían uno debajo de otro.
* **Ahora:** Gracias a Tailwind, las tarjetas se adaptan al dispositivo. En el móvil salen una debajo de otra para que sea cómodo deslizar con el dedo, pero en el ordenador se ponen en filas (una al lado de la otra) aprovechando mucho mejor el espacio de la pantalla.

### 🛠️ Limpieza en el Footer (Pie de página)
* **Antes:** Tenía algunas etiquetas mal puestas (listas rotas y títulos metidos dentro de párrafos).
* **Ahora:** Ordené el código para que sea correcto según los estándares, separé el logo de los enlaces de las webs y actualicé las rutas de las páginas para que todos los enlaces funcionen bien al pinchar en ellos (`./pages/...`).

---

## 4. Cambios extendidos a "Pages" y "Cursos"
Es importante destacar que estos cambios no los hice solo en la página principal (`index.html`). He replicado toda esta nueva estructura, los estilos de Tailwind, el menú responsive y la misma hoja de CSS en **todas las subpáginas de la web** (como sobre nosotros, blog, registro, login) y en las **páginas de los cursos** individuales (fullstack, blockchain, etc.). 

De esta forma, toda la web mantiene el mismo diseño oscuro, los mismos tipos de letra y la misma experiencia cómoda si se navega desde el móvil.

---

## 5. El toque final con JavaScript
Al final del HTML añadí unas pocas líneas de código en JavaScript. Sirven para dos cosas muy sencillas:
1. Que el menú del móvil se abra y se cierre al tocar el botón de las tres rayas.
2. Que si el usuario tiene el menú abierto y toca sin querer en cualquier otra parte de la pantalla, el menú se cierre solo para no molestar.

En resumen, la web ha pasado de ser un documento de texto plano a una página real, interactiva y lista para usarse en cualquier dispositivo. ¡Espero que le gusten los cambios!


## 🔗 Demo

👉 https://kampabru.github.io/CSS-tareas-entregables/proyecto_html_estilos/

---

## 📦 Instalación

```bash
npm install
npm run dev
```

---

## 📁 Estructura

```bash
src/
  ├── style.css
  ├── main.js
img/
index.html
```

---

## ✨ Autor

Kampa - Full Stack Developer en formación 🚀