import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.header`
  background-color: #004d65;
  color: #75d1dd;
  text-align: center;
  padding: clamp(20px, 5vw, 40px);
  border-radius: 10px 10px 0 0;
`;

const HeaderTitle = styled.h1`
  font-size: clamp(1.5rem, 3vw, 3rem);
  margin: 0;
`;

const Section = styled.section`
  background-color: #f8fafc;
  padding: clamp(20px, 5vw, 40px);
  border-radius: 0 0 10px 10px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const CircleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: clamp(10px, 2vw, 30px);
  width: 100%;
`;

const Circle = styled.div`
  width: clamp(100px, 20vw, 200px);
  height: clamp(100px, 20vw, 200px);
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: clamp(5px, 1vw, 15px);
`;

const CircleTitle = styled.h2`
  font-size: clamp(1rem, 2vw, 1.5rem);
  margin: 0;
`;

const CircleText = styled.p`
  font-size: clamp(0.8rem, 1.5vw, 1rem);
  color: #3d7a8c;
`;

const IdeasSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: clamp(20px, 5vw, 40px);
  background-color: #b3e0ea;
  border-radius: 10px;
  margin-top: clamp(20px, 5vw, 30px);
`;

const IdeasTitle = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: #004d65;
  margin-bottom: clamp(20px, 5vw, 30px);
`;

const IdeaContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  gap: clamp(10px, 3vw, 30px);
`;

const IdeaBox = styled.div`
  background-color: #004d65;
  color: #fff;
  padding: clamp(10px, 2vw, 20px);
  border-radius: 10px;
  width: clamp(100px, 30%, 200px);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IdeaIcon = styled.div`
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  margin-bottom: clamp(5px, 1vw, 10px);
`;

const IdeaText = styled.p`
  font-size: clamp(0.9rem, 1.5vw, 1.2rem);
`;

export const CierreUno = () => {
  return (
    <Container>
      <Header>
        <HeaderTitle>CIERRE: METACOGNICIÓN</HeaderTitle>
      </Header>
      <Section>
        <CircleContainer>
          <Circle>
            <CircleTitle>H1</CircleTitle>
            <CircleText>¿Qué aprendimos?</CircleText>
          </Circle>
          <Circle>
            <CircleTitle>H2</CircleTitle>
            <CircleText>¿Cómo lo aprendimos?</CircleText>
          </Circle>
          <Circle>
            <CircleTitle>H3</CircleTitle>
            <CircleText>¿Para qué sirve lo que aprendimos?</CircleText>
          </Circle>
          <Circle>
            <CircleTitle>H4</CircleTitle>
            <CircleText>¿Dónde aplicaremos lo aprendido?</CircleText>
          </Circle>
        </CircleContainer>
      </Section>
      <IdeasSection>
        <IdeasTitle>IDEAS FUERZA</IdeasTitle>
        <IdeaContainer>
          <IdeaBox>
            <IdeaIcon>💡</IdeaIcon>
            <IdeaText>IDEA 1</IdeaText>
          </IdeaBox>
          <IdeaBox>
            <IdeaIcon>🧬</IdeaIcon>
            <IdeaText>IDEA 2</IdeaText>
          </IdeaBox>
          <IdeaBox>
            <IdeaIcon>💊</IdeaIcon>
            <IdeaText>IDEA 3</IdeaText>
          </IdeaBox>
        </IdeaContainer>
      </IdeasSection>
    </Container>
  );
};

