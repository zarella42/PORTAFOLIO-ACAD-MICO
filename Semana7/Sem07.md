# Semana 7: React + Vite (TypeScript)

## Tema
Desarrollo de Aplicaciones con React y Vite usando TypeScript.

## Objetivo

Durante esta semana se abordó la creación de proyectos con **React y Vite integrando TypeScript**, combinando el rendimiento y simplicidad de Vite con la robustez del tipado estático que ofrece TypeScript. Este enfoque garantiza aplicaciones más seguras, escalables y mantenibles.

---
## ¿Qué es TypeScript?

**TypeScript (TS)** es un **superset de JavaScript** que agrega **tipado estático** y herramientas para mejorar la calidad del código.  
Fue desarrollado por Microsoft y se compila a JavaScript estándar, lo que significa que cualquier código JS válido también funciona en TS.

| **Aspecto** | **Descripción** |
|--------------|----------------|
| **Creador** | Microsoft |
| **Basado en** | JavaScript (ECMAScript) |
| **Ventajas** | Tipado estático, detección temprana de errores, autocompletado, compatibilidad con JS |
| **Compilación** | Se transpila a JavaScript mediante `tsc` o herramientas como Vite y Webpack |
| **Ideal para** | Proyectos grandes, en equipo o de larga duración |

---

## React + Vite + TypeScript

Al integrar **TypeScript** con **React y Vite**, se obtiene un entorno de desarrollo **rápido y seguro**, con una estructura moderna, validación de tipos y un flujo de trabajo optimizado.  
Vite gestiona automáticamente la compilación de archivos `.tsx`, permitiendo trabajar sin configuraciones complejas.

| **Ventaja** | **Descripción** |
|--------------|----------------|
| **Rendimiento** | Vite arranca el entorno en segundos y recarga instantáneamente los cambios. |
| **Robustez del código** | TypeScript detecta errores antes de ejecutar el código. |
| **Productividad** | Ofrece autocompletado, refactorización segura y documentación integrada. |
| **Seguridad** | Evita errores comunes como `undefined`, tipos incorrectos o parámetros faltantes. |
| **Escalabilidad** | Facilita el mantenimiento de proyectos grandes y modulares. |

---

## Pasos para crear un proyecto React + Vite + TypeScript

| **Paso** | **Comando / Descripción** |
|-----------|----------------------------|
| **1️.  Crear proyecto** | `npm create vite@latest nombreProyecto` |
| **2️.  Seleccionar framework** | Elegir `React` y luego `TypeScript` |
| **3️.  Entrar al directorio** | `cd nombreProyecto` |
| **4️.  Instalar dependencias** | `npm install` |
| **5️.  Ejecutar el servidor** | `npm run dev` |
| **6️.  Abrir en el navegador** | Visita `http://localhost:5173/` |

---

## 🧱 Estructura básica del proyecto

| **Carpeta / Archivo** | **Descripción** |
|------------------------|----------------|
| `/src` | Código fuente principal (componentes, hooks, utilidades). |
| `/src/App.tsx` | Componente principal de React con tipado TSX. |
| `/src/main.tsx` | Punto de entrada de la aplicación. |
| `/public` | Archivos estáticos (imágenes, íconos, fuentes). |
| `index.html` | Archivo raíz de la aplicación web. |
| `vite.config.ts` | Configuración de Vite en TypeScript. |
| `tsconfig.json` | Configuración del compilador de TypeScript. |

---

## 💻 Ejemplo básico en React + TypeScript

```tsx
// src/App.tsx
import React from 'react'

// Definición de una interfaz (TypeScript)
interface User {
  name: string
  age: number
}

const App: React.FC = () => {
  const user: User = { name: 'Mateo', age: 21 }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>🚀 React + Vite + TypeScript</h1>
      <p>Bienvenido, <strong>{user.name}</strong> 👋</p>
      <p>Edad: {user.age}</p>
    </div>
  )
}

export default App
```
---
## 🎯Conclusión
Integrar React, Vite y TypeScript permite desarrollar aplicaciones modernas, rápidas y seguras. Esta combinación optimiza la productividad, mejora la detección de errores y facilita la escalabilidad del código, convirtiéndose en una herramienta esencial para el desarrollo web profesional y de alto rendimiento.  

## 💡Reflexión

**¿Qué he aprendido?**  
Aprendí a integrar React con TypeScript utilizando Vite como entorno de desarrollo, comprendiendo cómo el tipado estático ayuda a prevenir errores y mantener un código más limpio y confiable.

**¿Cómo he aprendido?**  
Puedo usar React + TypeScript para desarrollar aplicaciones robustas y escalables, aplicando buenas prácticas de ingeniería de software y asegurando calidad en los proyectos reales.

## Bibliografía
>**Institución:**             | Universidad Nacional del Centro del Perú  
>-----------------------------|-------------------------------------------  
>**Facultad:**    | Ingeniería de Sistemas  
>**Asignatura:**              | Desarrollo de Aplicaciones Web  
>**Docente:**                 | Jaime Suasnábar Terrel  
>**Alumna:**               | Zarella Andrea Aranda Gomez 
>**Semestre:**                | IX  

---------------------------------