# Análisis Estructural General: Módulo de Formación Institucional (SENA)

## 1. Diagrama Jerárquico del Sistema

La siguiente estructura ilustra cómo fluye la información en cascada en la plataforma. Ningún nivel inferior puede existir sin estar anclado a su nodo superior. Esta arquitectura es universal para cualquier especialidad.

```text
🏛️ [OFERTA Y PROGRAMAS] (El "Qué" se enseña)
 │
 └──> 🎯 [PROYECTO FORMATIVO] (El "Cómo" se enseña)
       │
       ├──> 📖 Diseño Curricular (Lo que se debe saber - Competencias)
       ├──> 📦 Lista de Entregables (Lo que se debe hacer - Evidencias)
       │
       └──> 👥 [FICHAS] (El "Cuándo y Dónde" - Grupos)
             │
             ├──> 🔗 Asociar Proyecto (Vinculación de la teoría con el grupo operativo)
             └──> 👤 [APRENDICES] (El "Quién" - Estudiantes matriculados)
```

---

## 2. Tabla Explicativa de la Lógica de Negocio

Esta tabla detalla la función técnica de cada módulo dentro del sistema de información, independientemente del programa de formación.

| Nivel del Sistema | Función Principal en la Base de Datos | ¿Qué controla? | Restricción Lógica (Backend) |
| :--- | :--- | :--- | :--- |
| **Oferta y Programas** | Actúa como el **Catálogo Maestro**. Define las reglas generales de la titulación. | Nivel (Técnico, Tecnólogo, Operario), duración total y perfil del egresado. | No se puede crear una Ficha sin haber creado previamente un Programa. |
| **Proyecto Formativo** | Define la **Ruta Metodológica**. El SENA basa su educación en proyectos, no en materias aisladas. | El objetivo general que los estudiantes deben resolver antes de graduarse. | Un Programa puede tener varios Proyectos a lo largo de los años. |
| **- Diseño Curricular** | Es la **Base Teórica**. Contiene los Resultados de Aprendizaje (RAPs). | Lo que el instructor debe evaluar y calificar en el sistema. | Depende estrictamente del Proyecto aprobado. |
| **- Lista Entregables** | Es la **Base Práctica**. Son los "espacios" en la plataforma para subir tareas. | Las evidencias físicas o digitales que demuestran el aprendizaje. | Bloquea la certificación si no están marcados como "Aprobados". |
| **Fichas** | Es el **Contenedor Operativo**. Agrupa a los estudiantes en un tiempo y espacio específicos. | Jornada (Mañana, Tarde, Noche), fecha de inicio y fecha de fin. | Debe tener asociado un (1) solo Proyecto Formativo a la vez. |
| **Aprendices** | Es la **Gestión de Usuarios Finales**. Representa a la persona real. | Historial académico, estado (Activo, Retirado), notas y asistencias. | El aprendiz hereda automáticamente todos los entregables de la Ficha a la que se une. |

---

## 3. Tabla Comparativa: La Estructura Aplicada a Diferentes Programas

Para entender la versatilidad de esta arquitectura, a continuación se compara cómo los mismos módulos del sistema almacenan información completamente diferente dependiendo de la especialidad.

| Módulo del Sistema | Ejemplo 1: Tecnología | Ejemplo 2: Gastronomía | Ejemplo 3: Mecánica |
| :--- | :--- | :--- | :--- |
| **Oferta y Programas** | *Tecnólogo en Análisis y Desarrollo de Software* | *Técnico en Cocina* | *Técnico en Mantenimiento de Motocicletas* |
| **Proyecto Formativo** | Creación de un sistema web de gestión de inventarios. | Diseño y preparación de un menú para un evento de 50 personas. | Diagnóstico y reparación integral de un motor de 4 tiempos. |
| **Diseño Curricular (RAPs)** | "Codificar los módulos del software según el diseño". | "Preparar alimentos fríos y calientes según receta estándar". | "Corregir fallas en los sistemas eléctricos de la motocicleta". |
| **Lista de Entregables** | Subir código fuente a GitHub y manual técnico en PDF. | Subir ficha técnica del plato (costeo) y video de la preparación. | Subir reporte de diagnóstico y fotos del motor ensamblado. |
| **Fichas** | Ficha 2854321 (Lunes a Viernes - Diurna - Aula de Sistemas 1). | Ficha 2901122 (Fines de semana - Mixta - Cocina Taller 3). | Ficha 2788990 (Lunes a Viernes - Nocturna - Taller de Motores). |
| **Aprendices** | Juan Pérez (Desarrollando la base de datos). | María Gómez (Encargada de las salsas base). | Carlos Ruiz (Encargado del sistema de frenos ABS). |

---

## 4. Conclusión Técnica y Arquitectónica

Al analizar la tabla comparativa, se evidencia la escalabilidad de esta estructura. A nivel de código y base de datos, el sistema no está programado para una especialidad en particular. Está diseñado como una arquitectura modular abstracta.

El software se encarga de conectar el **"Quién"** (Aprendiz) con el **"Qué"** (Entregables) a través del **"Dónde"** (Ficha). El contenido (código, recetas, diagnósticos) es simplemente la data (texto, archivos, booleanos) que fluye a través de las relaciones establecidas en la base de datos, garantizando así la trazabilidad de cualquier programa ofertado por la institución.

---

## 5. El Ecosistema: ¿A qué otros módulos está ligado este bloque?

El bloque de "Programas, Proyectos y Fichas" no vive aislado. Es el corazón del sistema, pero necesita conectarse con otros cuatro (4) módulos satélites para que la institución funcione en la vida real. 

* **A. Módulo de Autenticación y Usuarios:**
    * *¿Cómo se ligan?* La tabla `Aprendices` de tu estructura no guarda las contraseñas. Se vincula mediante un ID al módulo central de usuarios. 
    * *Ejemplo:* Cuando un usuario hace login, el sistema verifica su rol. Si es "Aprendiz", busca su ID en tu módulo para saber en qué Ficha está.
* **B. Módulo de Infraestructura (Ambientes de formación):**
    * *¿Cómo se ligan?* La `Ficha` necesita un lugar físico o virtual para recibir clase. Tu tabla de Fichas se conecta con la tabla de Ambientes.
    * *Ejemplo:* El sistema no te dejará crear un horario para la "Ficha 1" en el "Laboratorio de Sistemas" si la "Ficha 2" ya lo tiene reservado.
* **C. Módulo de Asignación Académica (Instructores):**
    * *¿Cómo se ligan?* La `Ficha` necesita quién le dicte clase. Se cruza la disponibilidad del instructor con los horarios de la Ficha.
    * *Ejemplo:* Un instructor de inglés solo será asignado a tu Ficha cuando el *Diseño Curricular* indique que es hora de ver la competencia de bilingüismo.
* **D. Módulo de Centro de Calificaciones:**
    * *¿Cómo se ligan?* Este módulo "escucha" a tu `Lista de Entregables`.
    * *Ejemplo:* Cuando el aprendiz sube el entregable (un PDF, por ejemplo) en tu módulo, el Centro de Calificaciones habilita un botón para que el instructor lo marque como "Aprobado" o "Aún no competente".

---

## 6. Preguntas Clave y Análisis Funcional (Q&A del Sistema)

Para comprender el desarrollo, implementación y propósito exacto de esta estructura en el software, a continuación se resuelven las preguntas arquitectónicas más importantes con ejemplos claros:

### 💡 Sobre su Propósito y Función

**P1: ¿Para qué sirve exactamente esta estructura en el sistema?**
* **Respuesta:** Sirve para garantizar la **trazabilidad académica y la integridad de los datos**. Automatiza la vida de un estudiante. 
* *Ejemplo fácil:* Es como armar un tren. El "Programa" es la locomotora. Si no hay locomotora, los vagones (Fichas) no tienen a dónde ir, y los pasajeros (Aprendices) no pueden subirse. Esta estructura evita que existan pasajeros flotando sin un tren asignado.

**P2: ¿Cuál es la función principal de separar "Oferta y Programas" de "Proyecto Formativo"?**
* **Respuesta:** Brindar **flexibilidad**. Un programa general rara vez cambia, pero la forma de enseñarlo sí.
* *Ejemplo fácil:* El programa "Cocina" es siempre el mismo. Pero el año pasado el *Proyecto* era "Cocina Colombiana" y este año es "Cocina Mediterránea". Al separar las tablas, el sistema te permite actualizar las recetas (Entregables) de este año sin borrar a los alumnos graduados del año pasado.

**P3: ¿Por qué es un paso obligatorio "Asociar Proyecto Formativo" a una "Ficha"?**
* **Respuesta:** Porque una "Ficha" recién creada es solo un salón vacío. "Asociar" el proyecto es la acción que llena el tablero de tareas.
* *Ejemplo fácil:* Imagina que creas un grupo de WhatsApp (La Ficha) y metes a 30 personas (Aprendices). Hasta que no pongas una descripción y unas reglas en el grupo (El Proyecto), nadie sabe qué tiene que hacer ahí. 




*traer un envipi del trabajo*: algo visual como se veria 