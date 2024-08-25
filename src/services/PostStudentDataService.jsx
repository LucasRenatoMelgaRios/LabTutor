import axios from 'axios';

export const PostStudentDataService = async (studentData) => {
    try {
        const response = await axios.post(`https://66ca61e159f4350f064f0e88.mockapi.io/api/labtutor/estudiantes`, studentData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('Estudiante creado exitosamente');
        return response.data;
    } catch (error) {
        console.error('Error al crear el estudiante:', error);
        throw error;
    }
};
