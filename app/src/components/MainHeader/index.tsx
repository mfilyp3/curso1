import { Container, Welcome, Profile, UserName } from "./styles";
import { useMemo } from "react";
import emojis from "../../utils/emojis";
import { Toggle } from "../Toggle";

export function MainHeader() {
  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojis?.length);
    return emojis[index];
  }, []);
  return (
    <Container>
      <Toggle />

      <Profile>
        <Welcome>Olá, {emoji}</Welcome>
        <UserName>Santosl2c</UserName>
      </Profile>
    </Container>
  );
}
