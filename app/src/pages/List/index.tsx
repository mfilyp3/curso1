import { ContentHeader } from "../../components/ContentHeader";
import { HistoryFinanceCard } from "../../components/HistoryFinanceCard";
import { SelectInput } from "../../components/SelectInput";
import { Container, Content, Filters } from "./styles";

export function List() {
  const months = [
    {
      value: 1,
      label: "Janeiro",
    },
    {
      value: 2,
      label: "Fevereiro",
    },
    {
      value: 3,
      label: "Março",
    },
    {
      value: 4,
      label: "Abril",
    },
    {
      value: 5,
      label: "Maio",
    },
    {
      value: 6,
      label: "Junho",
    },
    {
      value: 7,
      label: "Julho",
    },

    {
      value: 8,
      label: "Agosto",
    },
    {
      value: 9,
      label: "Setembro",
    },
    {
      value: 10,
      label: "Outubro",
    },
    {
      value: 11,
      label: "Novembro",
    },
    { value: 12, label: "Dezembro" },
  ];

  const years = [
    {
      value: 2018,
      label: 2018,
    },
    {
      value: 2019,
      label: 2019,
    },
    {
      value: 2020,
      label: 2020,
    },
    {
      value: 2021,
      label: 2021,
    },
  ];
  return (
    <Container>
      <ContentHeader title="Entradas" lineColor="#000">
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>

      <Filters>
        <button type="button" className="tag-filter">
          Recorrentes
        </button>
        <button type="button" className="tag-filter recurrent">
          Eventuais
        </button>
      </Filters>

      <Content>
        <HistoryFinanceCard
          tagColor="#E44C4E"
          title="Conta de Luz"
          subTitle="27/07/2021"
          amount="R$21,00"
        />
        <HistoryFinanceCard
          tagColor="#E44C4E"
          title="Conta de Luz"
          subTitle="27/07/2021"
          amount="R$21,00"
        />
        <HistoryFinanceCard
          tagColor="#E44C4E"
          title="Conta de Luz"
          subTitle="27/07/2021"
          amount="R$21,00"
        />
        <HistoryFinanceCard
          tagColor="#E44C4E"
          title="Conta de Luz"
          subTitle="27/07/2021"
          amount="R$21,00"
        />
        <HistoryFinanceCard
          tagColor="#E44C4E"
          title="Conta de Luz"
          subTitle="27/07/2021"
          amount="R$21,00"
        />
        <HistoryFinanceCard
          tagColor="#E44C4E"
          title="Conta de Luz"
          subTitle="27/07/2021"
          amount="R$21,00"
        />
        <HistoryFinanceCard
          tagColor="#E44C4E"
          title="Conta de Luz"
          subTitle="27/07/2021"
          amount="R$21,00"
        />
        <HistoryFinanceCard
          tagColor="#E44C4E"
          title="Conta de Luz"
          subTitle="27/07/2021"
          amount="R$21,00"
        />
        <HistoryFinanceCard
          tagColor="#E44C4E"
          title="Conta de Luz"
          subTitle="27/07/2021"
          amount="R$21,00"
        />
        <HistoryFinanceCard
          tagColor="#E44C4E"
          title="Conta de Luz"
          subTitle="27/07/2021"
          amount="R$21,00"
        />
        <HistoryFinanceCard
          tagColor="#E44C4E"
          title="Conta de Luz"
          subTitle="27/07/2021"
          amount="R$21,00"
        />
        <HistoryFinanceCard
          tagColor="#E44C4E"
          title="Conta de Luz"
          subTitle="27/07/2021"
          amount="R$21,00"
        />
      </Content>
    </Container>
  );
}
