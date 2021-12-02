import {
  Container,
  Header,
  Logo,
  Title,
  MenuContainer,
  MenuItemLink,
} from "./styles";

import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from "react-icons/md";

import logoImg from "../../assets/logo.svg";

export function Aside() {
  return (
    <Container>
      <Header>
        <Logo src={logoImg} alt="Logo Minha Carteira" />
        <Title>Minha Carteira</Title>
      </Header>

      <MenuContainer>
        <MenuItemLink href="http://fdsfs">
          <MdDashboard /> Dashboard
        </MenuItemLink>

        <MenuItemLink href="http://fdsfs">
          <MdArrowUpward /> Entradas
        </MenuItemLink>

        <MenuItemLink href="http://fdsfs">
          <MdArrowDownward /> Saídas
        </MenuItemLink>

        <MenuItemLink href="http://fdsfs">
          <MdExitToApp />
          Sair
        </MenuItemLink>
      </MenuContainer>
    </Container>
  );
}
