import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { CiCalendarDate } from "react-icons/ci";
import { GiTeacher } from "react-icons/gi";
import { Link } from "react-router-dom";  // Importa Link
import { useAuth } from "../../context/AuthContext"; // Obtener usuario del contexto
export const FirstClassForum = () => {
    const { user } = useAuth(); // Obtén el usuario desde el AuthContext
    const [comments, setComments] = useState([]); // Estado para los comentarios
    const [newComment, setNewComment] = useState(""); // Estado para el nuevo comentario
    const [replyingTo, setReplyingTo] = useState(null); // Estado para respuestas

    const API_COMMENTS_URL = "https://66ca61e159f4350f064f0e88.mockapi.io/api/labtutor/comentarios"; // Ruta de la API para comentarios

    // Función para obtener los comentarios desde la API al montar el componente
    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get(API_COMMENTS_URL);
                setComments(response.data);
            } catch (error) {
                console.error("Error al obtener comentarios:", error);
            }
        };
        fetchComments();
    }, []);

    // Función para agregar un comentario a la API
    const handleAddComment = async () => {
        if (newComment.trim()) {
            const comment = {
                author: user.nombre,
                content: newComment,
                date: new Date().toLocaleString(),
                replies: [],
            };
            try {
                const response = await axios.post(API_COMMENTS_URL, comment);
                setComments([...comments, response.data]);
                setNewComment("");
            } catch (error) {
                console.error("Error al agregar comentario:", error);
            }
        }
    };

    // Función para responder a un comentario en la API
    const handleAddReply = async (commentId, replyContent) => {
        const commentToUpdate = comments.find(comment => comment.id === commentId);
        const updatedComment = {
            ...commentToUpdate,
            replies: [
                ...commentToUpdate.replies,
                {
                    author: user.nombre,
                    content: replyContent,
                    date: new Date().toLocaleString(),
                }
            ]
        };

        try {
            const response = await axios.put(`${API_COMMENTS_URL}/${commentId}`, updatedComment);
            setComments(comments.map(comment => comment.id === commentId ? response.data : comment));
            setReplyingTo(null);
        } catch (error) {
            console.error("Error al agregar respuesta:", error);
        }
    };

    return (
        <>
            <MainContainer>
                <QuestionContainer>
                    <QuestionBox>
                        <h2>Título de la Pregunta</h2>
                        <p>Descripción de la pregunta o detalles adicionales sobre el tema en discusión.</p>
                    </QuestionBox>

                    <CommentsSection>
                        {/* Formulario para agregar nuevo comentario */}
                        <CommentForm>
                            <textarea
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                placeholder="Escribe un comentario..."
                            />
                            <SubmitButton onClick={handleAddComment}>Enviar</SubmitButton>
                        </CommentForm>

                        {/* Mostrar todos los comentarios */}
                        {comments.map(comment => (
                            <Comment key={comment.id}>
                                <CommentHeader>
                                    <UserName>{comment.author}</UserName>
                                    <CommentDate>{comment.date}</CommentDate>
                                </CommentHeader>
                                <CommentBody>{comment.content}</CommentBody>
                                <ReplyButton onClick={() => setReplyingTo(comment.id)}>Responder</ReplyButton>

                                {/* Mostrar respuestas */}
                                <RepliesContainer>
                                    {comment.replies.map((reply, index) => (
                                        <Reply key={index}>
                                            <CommentHeader>
                                                <UserName>{reply.author}</UserName>
                                                <CommentDate>{reply.date}</CommentDate>
                                            </CommentHeader>
                                            <CommentBody>{reply.content}</CommentBody>
                                        </Reply>
                                    ))}
                                </RepliesContainer>

                                {/* Formulario de respuesta */}
                                {replyingTo === comment.id && (
                                    <CommentForm>
                                        <textarea
                                            placeholder="Escribe una respuesta..."
                                            onBlur={(e) => handleAddReply(comment.id, e.target.value)}
                                        />
                                    </CommentForm>
                                )}
                            </Comment>
                        ))}
                    </CommentsSection>
                </QuestionContainer>
            </MainContainer>
        </>
    );
};


// Styled Components (sin cambios en esta parte)
const MainContainer = styled.section`
    width: 100%;
    padding: clamp(10px, 5vw, 20px); 
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
`;

const QuestionContainer = styled.div`
    width: clamp(80%, 70vw, 60%);
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: clamp(15px, 3vw, 25px);

    @media (max-width: 768px) {
        width: 100%;
        padding: 10px;
    }
`;

const QuestionBox = styled.div`
    margin-bottom: clamp(15px, 3vw, 25px);

    h2 {
        font-size: clamp(18px, 4vw, 24px); 
        color: #333;
    }

    p {
        font-size: clamp(14px, 2.5vw, 18px);
        color: #666;
    }
`;

const CommentsSection = styled.div`
    margin-top: clamp(20px, 4vw, 30px);
`;

const CommentForm = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: clamp(20px, 4vw, 30px);

    textarea {
        width: 100%;
        height: clamp(80px, 5vw, 120px); 
        padding: clamp(10px, 2vw, 15px);
        border: 1px solid #ddd;
        border-radius: 5px;
        font-size: clamp(14px, 2.5vw, 16px);
        margin-bottom: 10px;
        resize: none;
    }
`;

const SubmitButton = styled.button`
    align-self: flex-end;
    padding: clamp(8px, 2vw, 12px) clamp(16px, 3vw, 24px);
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: clamp(12px, 2vw, 14px);

    &:hover {
        background-color: #2980b9;
    }
`;

const Comment = styled.div`
    margin-bottom: clamp(10px, 2vw, 20px);
    padding: clamp(10px, 2vw, 15px);
    background-color: #f9f9f9;
    border-radius: 5px;
    border: 1px solid #ddd;
`;

const CommentHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: clamp(5px, 1vw, 10px);
`;

const UserName = styled.span`
    font-weight: bold;
    color: #333;
    font-size: clamp(14px, 2.5vw, 16px);
`;

const CommentDate = styled.span`
    font-size: clamp(12px, 2vw, 14px);
    color: #888;
`;

const CommentBody = styled.div`
    font-size: clamp(14px, 2.5vw, 16px);
    color: #555;
    margin-bottom: 10px;
`;

const ReplyButton = styled.button`
    background-color: transparent;
    border: none;
    color: #3498db;
    cursor: pointer;
    font-size: clamp(12px, 2vw, 14px);

    &:hover {
        text-decoration: underline;
    }
`;

const RepliesContainer = styled.div`
    margin-top: 10px;
    padding-left: clamp(10px, 3vw, 20px); 
    border-left: 2px solid #ddd;
`;

const Reply = styled.div`
    margin-bottom: clamp(10px, 2vw, 20px);
    background-color: #f5f5f5;
    padding: clamp(8px, 2vw, 12px);
    border-radius: 5px;
    border: 1px solid #ddd;
`;