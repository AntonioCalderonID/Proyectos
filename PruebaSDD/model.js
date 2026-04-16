
/* ESPECIFICACIÓN DE DATOS (SDD):
1. Crear una estructura de datos simulada (mock) para 'Estudiantes'.
2. Cada estudiante debe tener: id (string), nombre (string), carrera (string) y estado (activo/inactivo).
3. Crear al menos 3 estudiantes de ejemplo.
4. Exportar la estructura.
*/
// Estructura de datos simulada para 'Estudiantes'
const estudiantes = [
    {   id: '1',
        nombre: 'Juan Pérez',
        carrera: 'Ingeniería en Sistemas',
        estado: 'activo'
    },
    {   id: '2',
        nombre: 'María López',
        carrera: 'Ingeniería Industrial',
        estado: 'activo'
    },
    {   id: '3',
        nombre: 'Carlos Sánchez',
        carrera: 'Ingeniería Civil',
        estado: 'inactivo'
    }
];                      

// Exportar la estructura de datos
module.exports = estudiantes;                                                           
