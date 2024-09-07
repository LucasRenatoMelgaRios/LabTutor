import styled from "styled-components"

import { ClassesSection } from "../components/sections/ClassesSection"
import { ChatGPTComponent } from "../components/ChatGPTComponent";

export const HomePage = () => {

    return (
        <>
            <MainContainer>
                <ClassesSection />
                <ChatGPTComponent/>
            </MainContainer>
        </>
    )
}


const MainContainer = styled.main`
  width: 100%;
`;