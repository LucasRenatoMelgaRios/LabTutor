import styled from "styled-components"

import { ClassesSection } from "../components/sections/ClassesSection"

export const HomePage = () => {

    return (
        <>
            <MainContainer>
                <ClassesSection />
            </MainContainer>
        </>
    )
}


const MainContainer = styled.main`
  width: 100%;
`;