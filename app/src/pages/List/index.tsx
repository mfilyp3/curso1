import { ContentHeader } from "../../components/ContentHeader";
import { HistoryFinanceCard } from "../../components/HistoryFinanceCard";
import { SelectInput } from "../../components/SelectInput";
import { Container, Content } from "./styles";

export function List() {
  return (
    <Container>
      <ContentHeader title="Entradas" lineColor="#000">
        <SelectInput
          options={[
            {
              value: "fds",
              label: "fff",
            },
            {
              value: "ENglish",
              label: "fdsf",
            },
          ]}
        />
      </ContentHeader>

      <Content>
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subTitle="27/07/2021"
          amount="R$21,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subTitle="27/07/2021"
          amount="R$21,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subTitle="27/07/2021"
          amount="R$21,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subTitle="27/07/2021"
          amount="R$21,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subTitle="27/07/2021"
          amount="R$21,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subTitle="27/07/2021"
          amount="R$21,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subTitle="27/07/2021"
          amount="R$21,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subTitle="27/07/2021"
          amount="R$21,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subTitle="27/07/2021"
          amount="R$21,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subTitle="27/07/2021"
          amount="R$21,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subTitle="27/07/2021"
          amount="R$21,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subTitle="27/07/2021"
          amount="R$21,00"
        />
      </Content>
    </Container>
  );
}
