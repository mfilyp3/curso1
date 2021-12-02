import { Container, Tag } from "./styles";

interface IHistoryFinanceCardsProps {
  cardColor: string;
  tagColor: string;
  title: string;
  subTitle: string;
  amount: string;
}

export function HistoryFinanceCard({
  cardColor,
  tagColor,
  title,
  subTitle,
  amount,
}: IHistoryFinanceCardsProps) {
  return (
    <Container color={cardColor}>
      <Tag color={tagColor} />

      <div>
        <span>{title}</span>
        <small>{amount}</small>
      </div>
      <h3> {amount} </h3>
    </Container>
  );
}
