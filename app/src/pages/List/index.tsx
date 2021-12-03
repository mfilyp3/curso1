import { ContentHeader } from "../../components/ContentHeader";
import { HistoryFinanceCard } from "../../components/HistoryFinanceCard";
import { SelectInput } from "../../components/SelectInput";
import { Container, Content, Filters } from "./styles";
import { useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";

interface IHistoryData {
  description: string;
  type: string;
  frequency: string;
  date: string;
  amount: string | any;
}

export function List() {
  let { type } = useParams();
  const [history, setHistory] = useState<IHistoryData[]>([]);
  const [frequencySelected, setFrequencySelected] = useState([
    "recorrente",
    "eventual",
  ]);

  const handleFrequencyClick = (frequency: string) => {
    const findIndex = frequencySelected.findIndex((f) => f === frequency);

    if (findIndex >= 0) {
      const filtered = frequencySelected.filter((f) => f !== frequency);
      setFrequencySelected(filtered);
    } else {
      setFrequencySelected((prev: any) => [...prev, frequency]);
    }
  };

  const objDescription = useMemo(() => {
    return type === "entry-balance"
      ? { title: "Entradas", lineColor: "#F7931B", data: gains }
      : { title: "Saídas", lineColor: "#E44C4E", data: expenses };
  }, [type]);

  const [monthSelected, setMonthSelected] = useState<string>(String(1));

  const [yearSelected, setYearSelected] = useState<string>(String(2020));

  const filterData = () => {
    const { data } = objDescription;

    return data?.filter((find) => {
      const monthFind = String(new Date(find.date).getMonth() + 1);

      return (
        find.date.startsWith(yearSelected) &&
        monthSelected === monthFind &&
        frequencySelected.includes(find.frequency)
      );

      //To do: if not have value, return 'no results'
    });
  };

  useEffect(() => {
    const filtered = filterData();
    setHistory(filtered);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [monthSelected, yearSelected, frequencySelected]);

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

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    history.forEach((item) => {
      const dateYear = new Date(item.date).getFullYear();

      if (!uniqueYears.includes(dateYear)) {
        uniqueYears.push(dateYear);
      }
    });

    return uniqueYears.map((year) => {
      return {
        value: year,
        label: year,
      };
    });
  }, [history]);

  return (
    <Container>
      <ContentHeader
        title={objDescription.title}
        lineColor={objDescription.lineColor}
      >
        <SelectInput
          options={months}
          onChange={(e) => setMonthSelected(e.target.value)}
        />
        <SelectInput
          options={years}
          onChange={(e) => setYearSelected(e.target.value)}
        />
      </ContentHeader>

      <Filters>
        <button
          type="button"
          className={`tag-filter recurrent ${
            !frequencySelected.includes("recorrente") && "tag-actived"
          }`}
          onClick={() => handleFrequencyClick("recorrente")}
        >
          Recorrentes
        </button>
        <button
          type="button"
          className={`tag-filter ${
            !frequencySelected.includes("eventual") && "tag-actived"
          }`}
          onClick={() => handleFrequencyClick("eventual")}
        >
          Eventuais
        </button>
      </Filters>

      <Content>
        {history?.map((hData) => {
          return (
            <HistoryFinanceCard
              key={Math.random() * 1000}
              tagColor={
                hData.frequency === "recorrente" ? "#4E41F0" : "#E44C4E"
              }
              title={hData.description}
              subTitle={new Intl.DateTimeFormat("pt-BR").format(
                new Date(hData.date)
              )}
              amount={new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(hData.amount)}
            />
          );
        })}
      </Content>
    </Container>
  );
}
