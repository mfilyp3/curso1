import styled from "styled-components";

export const Container = styled.div`
  grid-area: AS;

  border-right: 1px solid ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.secondary};

  padding-left: 20px;
`;

export const Header = styled.header`
  height: 70px;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.white};
  margin-left: 10px;
`;

export const MenuContainer = styled.nav`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
`;

export const MenuItemLink = styled.a`
    color: ${(props) => props.theme.colors.info};
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    margin: 7px 0;
    display: flex;
    align-items: center;
    height: 35px;

    &:hover {
        opacity: 0.7;
        margin-left: 7px;
    }

    > svg {
        font-size: 18px;
        margin-right: 5px;
    }
`;
