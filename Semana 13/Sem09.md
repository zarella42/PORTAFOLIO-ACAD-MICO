# Semana 13: Backend PHP (Laravel): CRUD Estudiante + MySQL + Tailwind

## Tema
Desarrollo backend con **PHP Laravel**, aplicando el patrón **MVC (Modelo–Vista–Controlador)** y el uso de **Eloquent ORM** para registrar estudiantes en una base de datos **MySQL**, incorporando una **vista Blade** con estilos modernos usando **Tailwind CSS**.


## Objetivo
- Comprender el funcionamiento del framework **Laravel** en el desarrollo backend.
- Aplicar el patrón **MVC** para organizar correctamente una aplicación web.
- Implementar el registro de estudiantes utilizando formularios y controladores.
- Conectar una aplicación Laravel con **MySQL** mediante migraciones y modelos.
- Utilizar **Eloquent ORM** para gestionar datos sin escribir SQL directo.
- Diseñar una interfaz básica usando **Blade + Tailwind CSS**.
-----

## Requisitos (entorno)
- PHP 8.1+
- Composer
- Node.js + npm (para Tailwind/Vite)
- MySQL (BD: `academico`)

> Nota rápida: habilitar extensiones en `php.ini` si tu Laravel/Composer lo requiere (zip, fileinfo, etc.).

---

## Procedimiento (paso a paso)

### Crear el proyecto Laravel
```bash
laravel new estudiantes-app
cd estudiantes-app
````

### Configurar conexión a MySQL

Edita el archivo `.env` (ajusta contraseña):

```env
DB_DATABASE=academico
DB_USERNAME=root
DB_PASSWORD=tu_contraseña
```

### Crear modelo + migración (tabla estudiantes)

```bash
php artisan make:model Estudiante -m
```

Edita `database/migrations/xxxx_create_estudiantes_table.php`:

```php
public function up()
{
    Schema::create('estudiantes', function (Blueprint $table) {
        $table->id('idEstudiante');
        $table->string('nomEstudiante');
        $table->string('dirEstudiante');
        $table->string('ciuEstudiante');
        $table->timestamps();
    });
}
```

Ejecuta migración:

```bash
php artisan migrate
```

---

## Agregar Tailwind CSS

###  Instalar Tailwind (v3)

```bash
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

### Agregar Tailwind a `resources/css/app.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Compilar assets

```bash
npm install
npm run dev
```

---

## Crear rutas + controlador + formulario (MVC)

###  Rutas — `routes/web.php`

> (En la guía aparece como `resources/routes/web.php`, pero en Laravel es `routes/web.php`)

```php
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EstudianteController;

Route::get('/', [EstudianteController::class, 'create']);
Route::post('/guardar', [EstudianteController::class, 'store']);
```

### Controlador — `app/Http/Controllers/EstudianteController.php`

Crear controlador:

```bash
php artisan make:controller EstudianteController
```

Código base:

```php
<?php

namespace App\Http\Controllers;

use App\Models\Estudiante;
use Illuminate\Http\Request;

class EstudianteController extends Controller
{
    public function create()
    {
        return view('formulario');
    }

    public function store(Request $request)
    {
        Estudiante::create([
            'nomEstudiante' => $request->nombre,
            'dirEstudiante' => $request->direccion,
            'ciuEstudiante' => $request->ciudad
        ]);

        return redirect('/')->with('mensaje', 'Estudiante registrado');
    }
}
```

### Modelo — `app/Models/Estudiante.php`

(Ya fue creado cuando hiciste `make:model`)

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Estudiante extends Model
{
    protected $table = 'estudiantes';
    protected $primaryKey = 'idEstudiante';
    protected $fillable = ['nomEstudiante', 'dirEstudiante', 'ciuEstudiante'];
}
```

### 6.4 Vista Blade — `resources/views/formulario.blade.php`

Crear vista:

```bash
php artisan make:view formulario
```

Contenido:

```blade
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Registro</title>
  @vite('resources/css/app.css')
</head>

<body class="bg-gray-100 flex justify-center items-center h-screen">

  <form action="/guardar" method="POST" class="bg-white p-6 rounded shadow-md w-96">
    @csrf

    <h2 class="text-xl font-bold mb-4">Nuevo Estudiante</h2>

    <input type="text" name="nombre" placeholder="Nombre" required
      class="w-full mb-3 p-2 border rounded">

    <input type="text" name="direccion" placeholder="Dirección" required
      class="w-full mb-3 p-2 border rounded">

    <input type="text" name="ciudad" placeholder="Ciudad" required
      class="w-full mb-3 p-2 border rounded">

    <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded w-full">
      Guardar
    </button>

  </form>

</body>
</html>
```

---

## Ejecución y prueba

Levanta el servidor:

```bash
php artisan serve
```

* Abre: `http://localhost:8000`
* Registra un estudiante y verifica que inserte en la tabla `estudiantes`.


---


## 🎯Conclusión
Durante esta semana se consolidaron los conocimientos sobre el desarrollo backend con **Laravel**, comprendiendo la importancia del patrón **MVC** para mantener una estructura clara y organizada. El uso de **Eloquent ORM** facilitó la interacción con la base de datos MySQL, mientras que **Blade y Tailwind CSS** permitieron crear una interfaz funcional y moderna. Esta práctica fortaleció la comprensión del flujo completo de una aplicación web desde la vista hasta la base de datos.


## 💡Reflexión

**¿Qué he aprendido?**  
He aprendido a desarrollar una aplicación backend usando **Laravel**, comprendiendo cómo se conectan las rutas, controladores, modelos y vistas dentro del patrón MVC. También entendí cómo Laravel simplifica el acceso a la base de datos mediante Eloquent y cómo integrar estilos modernos usando Tailwind CSS.


**¿Cómo he aprendido?**  
He aprendido mediante la práctica guiada, creando cada componente paso a paso y verificando su funcionamiento en un entorno real. La implementación directa del formulario y su conexión con la base de datos permitió afianzar los conceptos teóricos del framework Laravel.


## Bibliografía
>**Institución:**             | Universidad Nacional del Centro del Perú  
>-----------------------------|-------------------------------------------  
>**Facultad:**    | Ingeniería de Sistemas  
>**Asignatura:**              | Desarrollo de Aplicaciones Web  
>**Docente:**                 | Jaime Suasnábar Terrel  
>**Alumna:**               | Zarella Andrea Aranda Gomez 
>**Semestre:**                | IX  

---------------------------------
