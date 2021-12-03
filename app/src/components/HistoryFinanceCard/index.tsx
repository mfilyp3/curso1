import { Container, Tag } from "./styles";

interface IHistoryFinanceCardsProps {
  tagColor: string;
  title: string;
  subTitle: string;
  amount: string;
}

export function HistoryFinanceCard({
  tagColor,
  title,
  subTitle,
  amount,
}: IHistoryFinanceCardsProps) {
  return (
    <Container>
      <Tag color={tagColor} />

      <div>
        <span>{title}</span>
        <small>{amount}</small>
      </div>
      <h3> {amount} </h3>
    </Container>
  );
}
