import { useParams } from "react-router-dom";

export const ClassPage = () => {
    const { id } = useParams();

    // Aquí podrías buscar los detalles de la clase usando el id
    // Por ejemplo, puedes filtrar en el array de `classesData` según el `id`.

    return (
        <div>
            <h1>Detalles de la clase con ID: {id}</h1>
            {/* Aquí iría el contenido de la clase */}
        </div>
    );
};
