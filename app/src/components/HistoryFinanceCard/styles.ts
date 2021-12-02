import styled from 'styled-components'

interface IContainerProps {
    color: string;
}

interface ITagProps {
    color: string;
}

export const Container = styled.li<IContainerProps>`
    background-color: ${props => props.color};
    list-style: none;
    border-radius: 7px;
    margin: 10px;
    padding: 12px 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: all .4s;
    position: relative;

    &:hover { 
        opacity: 0.7;
        margin: 20px
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 10px
    }

    > h3 {
        font-weight: 700;
    }
`;


export const Tag = styled.div<ITagProps>`
    position: absolute;
    background: ${props => props.color};
    width: 10px;
    height: 60%;
    left: 0;
    
`;