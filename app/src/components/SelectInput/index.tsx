import { Container } from "./styles";

interface ISelectInputProps {
  options: {
    value: string | number;
    label: string | number;
  }[];
}
export function SelectInput({ options }: ISelectInputProps) {
  return (
    <Container>
      <select>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </Container>
  );
}
