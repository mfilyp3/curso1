import { Container, Tag } from "./styles";

interface IHistoryFinanceCardsProps {
  tagColor: string;
  title: string;
  subTitle: string | Date;
  amount: string | number;
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
        <small>{subTitle}</small>
      </div>
      <h3> {amount} </h3>
    </Container>
  );
}
