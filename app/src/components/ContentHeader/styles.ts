import styled from "styled-components";

interface ITitleContainerProps {
    lineColor: string;
}

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 25px;

   
`;

export const TitleContainer = styled.div<ITitleContainerProps>`
     > h1 {
        color: ${props => props.theme.colors.white};

        &::after {
            content: "";
            width: 55px;
            border-bottom: 2px solid ${props => props.lineColor};
            display: block;
            
        }
    }
    
`;

export const Controllers = styled.div`
    display: flex;
    align-items: center
  
`;