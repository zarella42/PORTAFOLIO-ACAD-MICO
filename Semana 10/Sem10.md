# Semana 10: Práctica: CRUD Estudiante 

## Tema
Desarrollo de una **API REST** utilizando **Spring Boot**, **Spring Data JPA** y **MySQL**, aplicando operaciones **CRUD** sobre la entidad *Estudiante*.

## Objetivo
Desarrollar y comprender una aplicación backend en Java mediante **Spring Boot**, implementando una **API REST** conectada a una base de datos MySQL, aplicando el patrón **MVC por capas** y validando su funcionamiento con herramientas de prueba.

## 📘 Actividades de la Semana

- Creación del proyecto Spring Boot con Maven.
- Configuración de conexión a MySQL.
- Definición de la entidad **Estudiante**.
- Implementación de repositorios con **Spring Data JPA**.
- Creación de controladores REST con endpoints HTTP.
- Pruebas completas de la API usando **Postman**.
---


## 🧠 Conceptos Clave
### Spring Boot
Framework de Java que simplifica el desarrollo backend mediante:
- Configuración automática.
- Dependencias preconfiguradas.
- Servidor embebido (Tomcat).
- Desarrollo rápido de APIs REST.

---

### 🔹 Arquitectura MVC por Capas
En una API REST basada en Spring Boot se aplica:

- **Model:** Representa las entidades y tablas de la base de datos.
- **Repository:** Acceso a datos mediante JPA.
- **Controller:** Manejo de rutas HTTP y respuestas REST.
- **Service (opcional):** Lógica de negocio.

---

### 🔹 JPA / Hibernate
Tecnología ORM que permite mapear clases Java a tablas MySQL, evitando el uso directo de SQL para operaciones CRUD básicas.

---

## 🛠️ Creación del Proyecto
El proyecto fue creado desde **Spring Initializr** usando:
- Maven
- Spring Web
- Spring Data JPA
- MySQL Driver
- (Opcional) Lombok

### 🗄️ Configuración de Base de Datos
Se creó una base de datos MySQL y se configuró la conexión en `application.properties`.

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/academico
spring.datasource.username=root
spring.datasource.password=123456
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

```


## Estructura recomendada del proyecto

```txt
src/main/java/com/tuempresa/apiAcademico/
  controllers/
  models/
  repositories/
  services/        (opcional)
  ApiAcademicoApplication.java
src/main/resources/
  application.properties
```

---

## Código base (Estudiante CRUD)

### Model: `Estudiante.java`

📌 Ruta sugerida: `models/Estudiante.java`

```java
package com.jsuasnabar.apiAcademico.models;

import jakarta.persistence.*;

@Entity
@Table(name = "estudiante")
public class Estudiante {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idEstudiante;

    private String nomEstudiante;
    private String dirEstudiante;
    private String ciuEstudiante;

    public Long getIdEstudiante() {
        return idEstudiante;
    }

    public void setIdEstudiante(Long idEstudiante) {
        this.idEstudiante = idEstudiante;
    }

    public String getNomEstudiante() {
        return nomEstudiante;
    }

    public void setNomEstudiante(String nomEstudiante) {
        this.nomEstudiante = nomEstudiante;
    }

    public String getDirEstudiante() {
        return dirEstudiante;
    }

    public void setDirEstudiante(String dirEstudiante) {
        this.dirEstudiante = dirEstudiante;
    }

    public String getCiuEstudiante() {
        return ciuEstudiante;
    }

    public void setCiuEstudiante(String ciuEstudiante) {
        this.ciuEstudiante = ciuEstudiante;
    }
}
```

### Repository: `EstudianteRepository.java`

📌 Ruta sugerida: `repositories/EstudianteRepository.java`

```java
package com.jsuasnabar.apiAcademico.repositories;

import com.jsuasnabar.apiAcademico.models.Estudiante;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EstudianteRepository extends JpaRepository<Estudiante, Long> {
}
```

### Controller: `EstudianteController.java`

📌 Ruta sugerida: `controllers/EstudianteController.java`

```java
package com.jsuasnabar.apiAcademico.controllers;

import com.jsuasnabar.apiAcademico.models.Estudiante;
import com.jsuasnabar.apiAcademico.repositories.EstudianteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/estudiantes")
public class EstudianteController {

    @Autowired
    private EstudianteRepository repo;

    // CREATE
    @PostMapping
    public Estudiante agregar(@RequestBody Estudiante estudiante) {
        return repo.save(estudiante);
    }

    // UPDATE
    @PutMapping("/{id}")
    public ResponseEntity<Estudiante> modificar(@PathVariable Long id, @RequestBody Estudiante datos) {
        return repo.findById(id)
                .map(est -> {
                    est.setNomEstudiante(datos.getNomEstudiante());
                    est.setDirEstudiante(datos.getDirEstudiante());
                    est.setCiuEstudiante(datos.getCiuEstudiante());
                    return ResponseEntity.ok(repo.save(est));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    // READ ALL
    @GetMapping
    public List<Estudiante> listarTodos() {
        return repo.findAll();
    }

    // READ BY ID
    @GetMapping("/{id}")
    public ResponseEntity<Estudiante> buscarPorId(@PathVariable Long id) {
        return repo.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
```

---

## Pruebas en Postman (CRUD)

> Base URL: `http://localhost:8080/api/estudiantes`

### POST — Crear estudiante

* Method: `POST`
* URL: `http://localhost:8080/api/estudiantes`
* Body (raw / JSON):

```json
{
  "nomEstudiante": "Juan Perez",
  "dirEstudiante": "Av. Los Héroes 123",
  "ciuEstudiante": "Huancayo"
}
```

### GET — Listar todos

* Method: `GET`
* URL: `http://localhost:8080/api/estudiantes`

### GET — Buscar por ID

* Method: `GET`
* URL: `http://localhost:8080/api/estudiantes/1`

### PUT — Actualizar por ID

* Method: `PUT`
* URL: `http://localhost:8080/api/estudiantes/1`
* Body (raw / JSON):

```json
{
  "nomEstudiante": "Juan P. Actualizado",
  "dirEstudiante": "Jr. Siempre Viva 742",
  "ciuEstudiante": "Chupaca"
}
```

### DELETE — Eliminar por ID

* Method: `DELETE`
* URL: `http://localhost:8080/api/estudiantes/1`

---

## Checklist de entrega (lo que debe verse)

* [ ] Proyecto Spring Boot compila y levanta.
* [ ] MySQL conectado (sin errores en consola).
* [ ] Tabla `estudiante` creada/actualizada automáticamente.
* [ ] Endpoints responden correctamente.
* [ ] Evidencias: capturas Postman (POST/GET/PUT/DELETE).

---

## 🎯Conclusión
Durante esta semana se logró comprender y aplicar el desarrollo de un **backend basado en Spring Boot**, implementando una **API REST CRUD** conectada a una base de datos **MySQL**. El uso del patrón **MVC por capas** permitió organizar correctamente el proyecto, separando la lógica de negocio, el acceso a datos y el control de las peticiones. Asimismo, el uso de herramientas como **JPA/Hibernate** y **Postman** facilitó el manejo de datos y la validación del funcionamiento de la API, reforzando las bases para el desarrollo de sistemas backend escalables y profesionales.


## 💡Reflexión

**¿Qué he aprendido?**  
He aprendido a construir una **API REST completa** utilizando **Spring Boot**, comprendiendo cómo se definen entidades, repositorios y controladores para realizar operaciones **CRUD**. Además, entendí cómo se establece la conexión entre una aplicación Java y una base de datos MySQL, y cómo se intercambia información mediante peticiones HTTP usando formato JSON.


**¿Cómo he aprendido?**  
He aprendido a través de la práctica directa, configurando el proyecto desde cero, desarrollando cada capa del backend y probando los endpoints con **Postman**. El análisis de errores y la validación de respuestas HTTP me permitieron reforzar la comprensión del funcionamiento real de una API backend.


## Bibliografía
>**Institución:**             | Universidad Nacional del Centro del Perú  
>-----------------------------|-------------------------------------------  
>**Facultad:**    | Ingeniería de Sistemas  
>**Asignatura:**              | Desarrollo de Aplicaciones Web  
>**Docente:**                 | Jaime Suasnábar Terrel  
>**Alumna:**               | Zarella Andrea Aranda Gomez 
>**Semestre:**                | IX  

---------------------------------
