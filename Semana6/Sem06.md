# Semana 6: React con Vite

## Tema
Implementación de proyectos con React y Vite

## Objetivo

Durante esta práctica se trabajó con **Vite**, una herramienta moderna que permite crear proyectos React con una configuración más rápida y eficiente que *Create React App*.  
Se exploraron sus ventajas, estructura de carpetas, ejecución y personalización del entorno de desarrollo.

---

## ¿Qué es Vite?

**Vite** es un *bundler* y entorno de desarrollo moderno para JavaScript que ofrece una carga ultrarrápida, gracias a que utiliza los **ES Modules** nativos del navegador y el sistema de **Hot Module Replacement (HMR)**.  
Es ideal para proyectos con React, Vue, Svelte o Vanilla JS.

| **Aspecto** | **Descripción** |
|--------------|----------------|
| **Creador** | Evan You (creador de Vue.js) |
| **Objetivo** | Mejorar la experiencia de desarrollo con tiempos de carga mínimos. |
| **Ventajas** | Rápido arranque, recarga instantánea, soporte nativo de módulos, menor consumo de recursos. |
| **Lenguajes/Frameworks compatibles** | React, Vue, Svelte, Preact, Vanilla JS, TypeScript. |

---

## React con Vite
React puede integrarse perfectamente con Vite para crear aplicaciones modernas, modulares y eficientes.  
Con Vite, la configuración es mínima y el entorno se ejecuta casi al instante.

| **Comparación** | **Create React App** | **Vite + React** |
|------------------|----------------------|------------------|
| **Velocidad de arranque** | Lenta | 🚀 Muy rápida |
| **Configuración inicial** | Pesada, tarda varios minutos | Ligera, lista en segundos |
| **Soporte TypeScript** | Manual | Integrado |
| **Hot Reload (actualización instantánea)** | Más lento | Instantáneo |
| **Uso de memoria** | Alto | Bajo |
| **Ideal para** | Proyectos pequeños | Aplicaciones modernas y escalables |

---

## Pasos para crear un proyecto React con Vite

| **Paso** | **Comando / Descripción** |
|-----------|----------------------------|
| **1️. Crear proyecto** | `npm create vite@latest nombreProyecto` |
| **2️. Seleccionar framework** | Elegir **React** o **React + TypeScript** |
| **3️. Entrar al directorio** | `cd nombreProyecto` |
| **4️. Instalar dependencias** | `npm install` |
| **5️. Ejecutar servidor local** | `npm run dev` |
| **6️. Abrir en el navegador** | Ir a `http://localhost:5173/` (por defecto) |

---

## Estructura básica del proyecto

| **Carpeta / Archivo** | **Descripción** |
|------------------------|----------------|
| `/src` | Contiene el código fuente de la aplicación. |
| `/src/App.jsx` | Componente principal de React. |
| `/src/main.jsx` | Punto de entrada donde se renderiza React. |
| `/public` | Archivos públicos (imágenes, íconos, etc.). |
| `index.html` | Archivo raíz de la aplicación. |
| `vite.config.js` | Configuración principal de Vite. |

---

## Ejemplo básico de componente en React con Vite

```jsx
// src/App.jsx
import React from 'react'

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>🚀 Bienvenido a React con Vite</h1>
      <p>Desarrollando rápido, moderno y eficiente 💻</p>
    </div>
  )
}

export default App
```
## Para ejecutar

```jsx
npm run dev
```

## 🎯Conclusión
El uso de React con Vite representa una evolución significativa en la forma de desarrollar aplicaciones web modernas.Gracias a su simplicidad, permite centrarse más en la lógica y diseño de la aplicación que en la configuración del entorno.
Esta práctica no solo refuerza el conocimiento técnico en React, sino que también promueve buenas prácticas de desarrollo profesional.  

## 💡Reflexión

**¿Qué he aprendido?**  
Aprendí a crear un proyecto React utilizando Vite, entendiendo cómo su estructura mejora la velocidad y simplicidad del desarrollo. Además, comprendí las ventajas técnicas que ofrece sobre otros entornos tradicionales como Create React App.

**¿Cómo he aprendido?**  
Este conocimiento me permite desarrollar aplicaciones modernas, optimizadas y escalables. También me prepara para trabajar en proyectos reales con herramientas que hoy son estándar en la industria del desarrollo web..

## Bibliografía
>**Institución:**             | Universidad Nacional del Centro del Perú  
>-----------------------------|-------------------------------------------  
>**Facultad:**    | Ingeniería de Sistemas  
>**Asignatura:**              | Desarrollo de Aplicaciones Web  
>**Docente:**                 | Jaime Suasnábar Terrel  
>**Alumna:**               | Zarella Andrea Aranda Gomez 
>**Semestre:**                | IX  

---------------------------------