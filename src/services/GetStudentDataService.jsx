import axios from 'axios';

export const GetStudentDataService = async () => {
    try {
        const response = await axios.get(`https://66ca61e159f4350f064f0e88.mockapi.io/api/labtutor/estudiantes`,{
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('Estudiante obtenido exitosamente');
        return response.data;
    } catch (error) {
        console.error('Error al crear la nota:', error);
        throw error;
    }
};