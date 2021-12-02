import styled from "styled-components";

export const Container = styled.div`
    > select {
        padding: 7px 10px;
        border-radius: 5px;
        color: ${props => props.theme.colors.black};
        margin-right: 5px;
    }
`;