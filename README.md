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