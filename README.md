# Lecturas Mágicas Frontend: Especificación Técnica

## 💻 Tecnologías Clave Utilizadas en el Desarrollo Frontend

La aplicación "Lecturas Mágicas" fue construida utilizando un *stack* de tecnologías frontend modernas, asegurando una experiencia de usuario rápida, reactiva y mantenible.

| Categoría | Tecnología | Rol Principal y Propósito |
| :--- | :--- | :--- |
| **Núcleo** | **React** | El **arquitecto** de la aplicación. Permite construir la interfaz de usuario mediante **componentes** reutilizables (Botones, Tarjetas, Secciones), facilitando la gestión de estados y la actualización eficiente del DOM. |
| **Diseño** | **Tailwind CSS** | Un *framework* de CSS de utilidad que permite aplicar estilos de forma directa e inmediata en el código HTML con **clases concisas** (ej., `bg-blue-500`, `text-lg`). Proporciona diseño rápido y altamente flexible. |
| **Componentes UI** | **FlowBite** | Una librería de **componentes pre-diseñados** (Basados en Tailwind) como `Button`, `Card` y `Badge`. Acelera el desarrollo al proporcionar elementos de interfaz listos para usar con un aspecto moderno y consistente. |
| **Navegación** | **React Router DOM** | Gestiona el **enrutamiento** de la aplicación. Permite al usuario moverse entre diferentes "páginas" (rutas como `/inicio` o `/aprende`) de forma rápida y fluida sin recargar completamente el navegador. |
| **Comunicación** | **Axios** | Cliente HTTP moderno encargado de todas las **peticiones al *backend***. Se usa para enviar credenciales de administrador o estudiante y para obtener datos (ej., la lista de estudiantes o contenidos). |
| **Multimedia** | **Howler & React-Howler** | Librerías esenciales para el control y la gestión precisa del **audio**. Permiten reproducir los sonidos de las letras, sílabas y frases de manera controlada y sin *glitches*, vital para una aplicación de lectura. |
| **Gráficos** | **Lucide-React** | Un catálogo de **iconos** vectoriales ligeros que se integran fácilmente. Se usan para los elementos visuales como flechas, el símbolo de volumen (`Volume2`) y la insignia de administrador (`ShieldCheck`). |
| **Desarrollo** | **Vite** | **Herramienta de construcción** (*bundler*) y servidor de desarrollo. Es conocido por su rapidez, lo que acelera tanto el proceso de desarrollo como el empaquetado final del código. |
| **Calidad** | **ESLint** | Herramienta de **análisis estático** que ayuda a los programadores a mantener la calidad del código, detectar errores potenciales y aplicar reglas de estilo consistentes en todo el proyecto. |

---

## 🗺️ Estructura de Rutas de la Aplicación

La arquitectura de la aplicación se organiza en dos flujos principales, que se distinguen tanto por el acceso como por su propósito funcional.

### 1. Flujo del Estudiante (Núcleo de Aprendizaje)

Esta sección está dedicada al usuario final y a su experiencia interactiva de aprendizaje.

| Ruta (Dirección URL) | Componente (Página) | Propósito y Función |
| :--- | :--- | :--- |
| **/** | **HomeLoginStudent** | **Página de Registro/Inicio de Sesión.** Captura los datos iniciales del estudiante y guarda la sesión en `localStorage`. |
| **/inicio** | **Inicio** | **Dashboard del Estudiante.** Muestra el perfil recuperado y el botón principal para acceder a la sección de aprendizaje. |
| **/aprende** | **AprendeALeer** | **Menú de Niveles.** Página de selección que lista y da acceso a los cuatro niveles secuenciales de la aplicación. |
| **/aprende/nivel1** | **Nivel1** | Módulo de aprendizaje dedicado al **Abecedario**. |
| **/aprende/nivel2** | **Nivel2** | Módulo de aprendizaje dedicado a la formación de **Sílabas**. |
| **/aprende/nivel3** | **Nivel3** | Módulo de aprendizaje dedicado a la formación de **Palabras** (incluye palabras frecuentes). |
| **/aprende/nivel4** | **Nivel4** | Módulo de aprendizaje dedicado a la lectura y comprensión de **Frases**. (Al completar, redirige de vuelta a **/aprende**). |

---

### 2. Flujo del Administrador (Gestión y Monitoreo)

Esta sección es restringida, diseñada para el personal de gestión o profesores.

| Ruta (Dirección URL) | Componente (Página) | Propósito y Función |
| :--- | :--- | :--- |
| **/admin** | **LoginAdmin** | **Acceso de Administración.** Formulario que usa **Axios** para autenticar credenciales especiales contra el *backend*. |
| **/admin/inicio** | **HomeAdmin** | **Panel de Control.** Muestra el perfil del administrador y lista todos los **usuarios estudiantes** obtenidos mediante una llamada a la API. |


---

## 🚪 Ruta `/` (Página de Inicio/Acceso del Estudiante)

| Componente | Dirección URL | Propósito |
| :--- | :--- | :--- |
| **LoginStudent** | `/` (Portada) | Permite a los estudiantes **iniciar sesión** si ya tienen cuenta o **registrar una nueva** si no la encuentran. |

### 🔍 ¿Qué Hace esta Página?

Esta es la primera pantalla que ven los estudiantes. Su función es doble:

1.  **Inicio de Sesión (Login):** Si el estudiante ya usó la aplicación, ingresa su correo y contraseña.
2.  **Registro (Registro de Cuenta):** Si el sistema no encuentra la cuenta del estudiante, la aplicación automáticamente ofrece un formulario para **crear una cuenta nueva** pidiendo el nombre, correo, contraseña y edad.

La aplicación está diseñada para ser muy amigable: si intentas iniciar sesión y tu cuenta no existe, en lugar de darte un error confuso, te muestra el formulario de registro para que puedas continuar rápidamente con tu aventura de lectura.

### ⚙️ Tecnologías Clave en este Componente

Este componente combina varias de las herramientas que ya mencionamos para manejar la interfaz y la comunicación con el servidor:

* **React y Hooks (`useState`, `useNavigate`):**
    * **`useState`:** Se utiliza para **recordar** la información que escribe el estudiante (correo, contraseña, nombre, edad) y para saber si debe mostrar el formulario de "Iniciar Sesión" o el de "Crear Cuenta".
    * **`useNavigate`:** Una vez que el estudiante inicia sesión o se registra correctamente, esta herramienta se encarga de enviarlo automáticamente a la siguiente pantalla, que es el **`/inicio`**.
* **Axios (Comunicación Secreta):**
    * Esta es la herramienta que se usa para **enviar la información** de los formularios (correo y contraseña) al *backend* de la aplicación (la dirección `https://aprende-a-leer.fly.dev/auth/login`).
    * *Si la respuesta es exitosa*, el estudiante es autenticado.
    * *Si hay un error*, **Axios** ayuda a determinar si el error se debe a una contraseña incorrecta o a que la cuenta no existe.
* **`localStorage` (Memoria del Navegador):**
    * Después de que el estudiante inicia sesión con éxito, su información de usuario se guarda temporalmente en el `localStorage` del navegador. Esto es como darle una **llave mágica** al navegador para que la aplicación sepa que el estudiante ya está dentro y no tenga que pedirle el correo y la contraseña en cada página.
* **Tailwind CSS (Diseño Mágico):**
    * Todos los colores degradados (`bg-gradient-to-br from-purple-200...`), las esquinas redondeadas (`rounded-[2rem]`) y los efectos animados (como el botón que se agranda al pasar el ratón `hover:scale-105`) se logran usando las clases rápidas de Tailwind.

---


## 🏠 Ruta `/inicio` (Tablero Principal del Estudiante)

| Componente | Dirección URL | Propósito |
| :--- | :--- | :--- |
| **Inicio** | `/inicio` | Muestra el **perfil del estudiante** y proporciona el botón principal para **acceder a los niveles de lectura** (el "juego"). |

### 🔍 ¿Qué Hace esta Página?

La función de esta página es dar la bienvenida al estudiante y mostrarle rápidamente **quién es** y **dónde ir**.

1.  **Carga el Perfil:** Lo primero que hace es ir a la "llave mágica" (`localStorage`) que se guardó en la página de inicio para obtener y mostrar el **nombre**, **correo** y **edad** del estudiante.
2.  **Muestra la Información:** Presenta estos datos en un formato atractivo y fácil de ver, confirmando que el acceso fue exitoso.
3.  **Botón de Acción Principal:** Su elemento más importante es el botón **"Entrar al Juego"**, que es el enlace directo a la ruta de selección de niveles (`/aprende`).

### ⚙️ Tecnologías Clave en este Componente

Este componente se enfoca en la presentación de datos y la navegación:

* **React Hooks (`useEffect`, `useState`):**
    * **`useEffect`:** Este *hook* es crucial. Cuando la página se carga por primera vez, `useEffect` se encarga de ir a la **memoria del navegador** (`localStorage`) y **recuperar** los datos del usuario.
    * **`useState`:** Se usa para guardar esos datos del usuario (nombre, correo, edad) y asegurarse de que se muestren correctamente en la pantalla.
* **Flowbite-React y Card:**
    * **`Card`:** Se utiliza para dar un **diseño visual de tarjeta** a la información del perfil, dividiendo claramente la sección de datos del usuario y la sección del botón de juego.
    * **`Button`:** Se usa para crear el botón grande y llamativo que invita al estudiante a comenzar la aventura.
* **Lucide-React (Iconografía):**
    * Proporciona los **iconos** utilizados para hacer más clara la información, como el icono de **`User`** para el nombre, **`Mail`** para el correo, y **`BookOpen`** y **`Sparkles`** para el botón de juego.
* **Link (Navegación Interna):**
    * A diferencia de un botón normal, el botón "Entrar al Juego" usa el componente **`Link`** de `react-router-dom`. Esto garantiza que la navegación a la ruta `/aprende` sea instantánea y sin recargar la página, haciendo la experiencia muy fluida.

---

## 📚 Ruta `/aprende` (Menú de Niveles de Aprendizaje)

| Componente | Dirección URL | Propósito |
| :--- | :--- | :--- |
| **AprendeALeer** | `/aprende` | Actúa como el **mapa de progreso**, permitiendo al estudiante **seleccionar el nivel** de lectura al que desea acceder. |

### 🔍 ¿Qué Hace esta Página?

Esta pantalla es el centro de control del aprendizaje. Muestra de forma clara y visual los **cuatro grandes niveles** de la aplicación, cada uno representado por una tarjeta interactiva:

1.  **Nivel 1: Abecedario (ABC):** Para aprender las letras básicas.
2.  **Nivel 2: Sílabas:** Para aprender a combinar las letras.
3.  **Nivel 3: Palabras:** Para formar términos completos.
4.  **Nivel 4: Frases:** Para practicar la lectura y comprensión completa.

Al hacer clic en cualquiera de las tarjetas, el estudiante es llevado directamente a la página de ese nivel específico (por ejemplo, `/aprende/Nivel1`).

### ⚙️ Tecnologías Clave en este Componente

Este componente destaca por el uso de estructuras de datos y un diseño muy interactivo:

* **Estructura de Datos (Array `niveles`):**
    * En lugar de escribir la misma estructura de tarjeta cuatro veces, el desarrollador creó un **listado (`niveles`)** de información (título, descripción, color, ruta) para cada nivel.
    * Luego, utiliza una técnica de programación para **crear automáticamente** las cuatro tarjetas (un *map*), asegurando que todas tengan el mismo diseño pero con la información y colores correctos. Esto hace que el código sea limpio y fácil de mantener.
* **Link (Navegación):**
    * Cada tarjeta completa es un enlace (`Link`) que utiliza la ruta definida para ese nivel (`/aprende/Nivel1`, `/aprende/Nivel2`, etc.) para mover al estudiante sin recargar la página.
* **Tailwind CSS (Diseño y Animaciones):**
    * Este componente hace un uso intensivo de Tailwind para el diseño visual avanzado:
        * **Degradados de Color:** Cada nivel tiene su propia paleta de colores vibrantes (`from-pink-500 to-rose-500`, `from-blue-500 to-cyan-500`).
        * **Efectos Hover:** Las animaciones (`hover:shadow-2xl`, `hover:-translate-y-2`) hacen que las tarjetas parezcan **saltar o flotar** cuando el estudiante pasa el ratón por encima, haciendo la experiencia más atractiva.
* **Iconos SVG Personalizados:**
    * En lugar de usar una librería de iconos estándar, los iconos (como el libro con **ABC** o los cuadros de **Sílabas**) se crearon usando **SVG** (gráficos vectoriales), lo que garantiza que se vean perfectamente nítidos y puedan cambiar de color con los degradados de Tailwind.

---


## 🅰️ Ruta `/aprende/nivel1` (Nivel 1: El Abecedario)

| Componente | Dirección URL | Propósito |
| :--- | :--- | :--- |
| **Nivel1** | `/aprende/nivel1` | Enseña las **letras del abecedario** una por una, asociando cada letra con su imagen y sonido correspondiente. |

### 🔍 ¿Qué Hace esta Página?

Este es el módulo de introducción al abecedario. Su función principal es que el estudiante reconozca las letras y escuche su sonido.

1.  **Pantalla de Inicio:** Al entrar por primera vez, se muestra una **pantalla de bienvenida** con una imagen motivacional y un botón **"Empezar"**. También reproduce un audio de introducción (el `audioMain`).
2.  **Aprendizaje Interactivo:** Una vez que el estudiante comienza, la página muestra la **letra** actual, una **imagen** asociada y un botón de **"Escuchar"**.
3.  **Navegación:** Permite al estudiante navegar a la letra **Siguiente** o **Anterior** usando los botones.
4.  **Progreso:** Muestra una barra de progreso que indica **cuántas letras** ha visto el estudiante y su porcentaje de avance (`{currentIndex + 1}/{totalWords}`).
5.  **Finalización:** Cuando el estudiante termina todas las letras, es **redireccionado automáticamente** a la siguiente ruta, el **Nivel 2** (`/aprende/nivel2`), para continuar con su aprendizaje.

### ⚙️ Tecnologías Clave en este Componente

Este módulo se centra en la gestión del contenido multimedia (imágenes y audio) y el control de la experiencia:

* **Estructura de Datos (`words`):**
    * Al igual que en la página anterior, aquí se usa un gran listado (llamado `words`) que contiene **toda la información del abecedario**: la letra (`word`), la ruta de la imagen (`image`) y la dirección URL del sonido (`audio`).
    * Esta estructura permite que el componente cargue dinámicamente el contenido de las 27 letras simplemente cambiando un número (`currentIndex`), sin tener que escribir 27 páginas diferentes.
* **Gestión de Audio (HTML5 `window.Audio`):**
    * Para la funcionalidad principal de **"Escuchar"**, el componente crea un objeto de audio en el navegador. Las funciones `playMainAudio` y `speakWord` se encargan de **reproducir** el sonido de la letra actual y de **pausarlo** cuando termina, gestionando el estado `isPlaying` (si el audio está sonando) para evitar que se reproduzcan varios sonidos a la vez.
* **React Hooks (`useState`, `useEffect`, `useRef`):**
    * **`useState`:** Controla la letra que se está viendo actualmente (`currentIndex`), si el audio está sonando (`isPlaying`) y si debe mostrar la pantalla de inicio o el contenido (`showStart`).
    * **`useRef`:** Se utiliza para mantener una **referencia al objeto de audio** (`audioRef.current`). Esto es vital para poder **detener el audio** si el estudiante cambia de letra o sale de la página.
    * **`useEffect`:** Se usa para iniciar la reproducción del `audioMain` (el audio de bienvenida) tan pronto como la página de inicio se muestra.
* **Lucide-React (Iconos):**
    * Proporciona los iconos de navegación (`ChevronLeft`, `ChevronRight`) y el icono de sonido (`Volume2`) para hacer la interfaz clara.
* **`useNavigate` (Navegación de Avance):**
    * Es usado en la función `handleNext`. Cuando el estudiante alcanza la última letra, esta herramienta lo lleva directamente al `'/aprende/nivel2'`.

---

## 👂 Ruta `/aprende/nivel2` (Nivel 2: Las Sílabas)

| Componente | Dirección URL | Propósito |
| :--- | :--- | :--- |
| **Nivel2** | `/aprende/nivel2` | Enseña a los estudiantes a **combinar las consonantes con las vocales** para formar sílabas básicas (Ma, Me, Mi, Mo, Mu, etc.). |

### 🔍 ¿Qué Hace esta Página?

Este componente toma la base del Nivel 1 (las letras) y la eleva para enseñar la **combinación de sonidos**, que es fundamental para leer palabras:

1.  **Enfoque en la Unión:** El contenido principal (`words`) está centrado en sílabas construidas con las consonantes más comunes (**M, P, T, L, S**), combinadas con las cinco vocales.
2.  **Aprendizaje Auditivo y Visual:** Para cada combinación (por ejemplo, "M con la A Ma"), la página muestra el **texto completo** y el estudiante puede hacer clic en **"Escuchar"** para oír la pronunciación correcta de la sílaba resultante.
3.  **Misma Estructura, Nuevo Contenido:** La estructura de la página (la barra de progreso, los botones de Anterior/Siguiente, la pantalla de inicio con el audio introductorio) es la **misma que en el Nivel 1**. Esto proporciona una **experiencia de usuario consistente** (el estudiante ya sabe cómo interactuar) mientras introduce un nuevo y más complejo contenido.
4.  **Avance Automático:** Una vez que el estudiante ha revisado todas las sílabas, la aplicación lo redirige automáticamente al **Nivel 3** (`/aprende/nivel3`), donde esas sílabas se usarán para formar palabras.

### ⚙️ Tecnologías Clave en este Componente

La tecnología usada es idéntica a la del Nivel 1, lo que demuestra la **reutilización de código** de React:

* **React y Reutilización:** El desarrollador pudo copiar gran parte del código del `Nivel1.jsx` y simplemente cambiar el **listado de contenido** (`words`) y el audio principal (`audioMain`). Esto es muy eficiente porque significa que si se mejora la manera en que funciona el audio o la navegación en un nivel, se mejora en todos.
* **Estructura de Datos (`words`):**
    * El listado es más extenso que el del Nivel 1 (tiene 25 sílabas) y mantiene la misma lógica: **texto de la sílaba** (`word`), **imagen asociada** (`image`) y la URL del **audio** (`audio`).
* **Gestión de Audio:**
    * Las funciones `speakWord` y `playMainAudio` siguen usando `window.Audio` y `audioRef.current` para una reproducción controlada de los sonidos, asegurando que cada sílaba se escuche claramente.
* **`useNavigate` (Transición a Nivel 3):**
    * Al completar la última sílaba, el *hook* `useNavigate` garantiza la transición fluida al nivel superior.

---
