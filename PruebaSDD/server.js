
/* ESPECIFICACIÓN DEL ENDPOINT DEL CHATBOT (SDD):
Ruta: POST /api/chat
Propósito: Responder a consultas básicas del estudiante usando reglas estáticas.

Reglas de negocio:
1. Recibir 'studentId' y 'mensaje' en el body de la petición.
2. Si el mensaje incluye la palabra "horario", buscar al estudiante en los datos (importar de models.js).
   - Si el estudiante es "activo", devolver: "Tu horario está disponible en el portal. Tienes clases de 8 AM a 2 PM."
   - Si el estudiante es "inactivo", devolver: "Tu cuenta está inactiva, contacta a registro."
3. Si el mensaje incluye la palabra "biblioteca", devolver un string: "La biblioteca abre de 7 AM a 9 PM."
4. Si no entiende el mensaje, devolver: "No entendí tu pregunta. Intenta con 'horario' o 'biblioteca'."
5. Si falta el 'studentId' o el 'mensaje', devolver un error 400.
*/

// Inicializar Express y escribir el endpoint basado en la especificación anterior:
const express = require('express');
const app = express();
const estudiantes = require('./model'); // Importar los datos de estudiantes                            
app.use(express.json()); // Middleware para parsear JSON                    

app.post('/api/chat', (req, res) => {                                                                   
    const { studentId, mensaje } = req.body; // Extraer studentId y mensaje del body                        
    // Validar que se recibieron ambos campos
    if (!studentId || !mensaje) {
        return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }           
    // Buscar al estudiante por ID                          
    const estudiante = estudiantes.find(est => est.id === studentId);                                                                                                                                                                               
    if (!estudiante) {                                                  
        return res.status(404).json({ error: 'Estudiante no encontrado' });
    }
    // Procesar el mensaje según las reglas de negocio
    if (mensaje.includes('horario')) {
        if (estudiante.estado === 'activo') {
            return res.json({ respuesta: 'Tu horario está disponible en el portal. Tienes clases de 8 AM a 2 PM.' });
        } else {
            return res.json({ respuesta: 'Tu cuenta está inactiva, contacta a registro.' });
        }
    } else if (mensaje.includes('biblioteca')) {
        return res.json({ respuesta: 'La biblioteca abre de 7 AM a 9 PM.' });
    } else {
        return res.json({ respuesta: 'No entendí tu pregunta. Intenta con "horario" o "biblioteca".' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
}); 