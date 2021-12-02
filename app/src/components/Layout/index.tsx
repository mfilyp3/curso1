import { Aside } from "../Aside";
import { Content } from "../Content";
import { MainHeader } from "../MainHeader";
import { GridContainer } from "./styles";

interface ILayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: ILayoutProps) {
  return (
    <GridContainer>
      <MainHeader />
      <Aside />
      <Content>{children}</Content>
    </GridContainer>
  );
}
