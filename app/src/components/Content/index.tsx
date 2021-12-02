import { Container } from "./styles";

interface IContentProps {
  children: React.ReactNode;
}

export function Content({ children }: IContentProps) {
  return <Container>{children}</Container>;
}
