import { Container, ToggleLabel, ToggleSelector } from "./styles";
import { useState } from "react";

export function Toggle() {
  const [isChecked, setIsChecked] = useState(false);

  function handleToggle() {
    setIsChecked(!isChecked);
  }

  return (
    <Container>
      <ToggleLabel>Light</ToggleLabel>

      <ToggleSelector
        checked={isChecked}
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={() => handleToggle()}
      />

      <ToggleLabel>Dark</ToggleLabel>
    </Container>
  );
}
