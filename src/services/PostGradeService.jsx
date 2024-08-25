import axios from 'axios';

export const PostGradeService = async (gradeData) => {
    try {
        const response = await axios.post(`https://66ca61e159f4350f064f0e88.mockapi.io/api/labtutor/notas`, gradeData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('Nota creada exitosamente');
        return response.data;
    } catch (error) {
        console.error('Error al crear la nota:', error);
        throw error;
    }
};
