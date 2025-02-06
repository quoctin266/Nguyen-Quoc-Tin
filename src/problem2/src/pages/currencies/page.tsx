import { Container } from "@mui/material";
import CurrenciesTable from "../../components/table/currencies.table";
import styles from "./page.module.scss";
import { useQuery } from "@tanstack/react-query";
import { getCurrencies } from "../../services/currency.service";

function CurrenciesPage() {
  const { data } = useQuery({
    queryKey: ["fetchCurrencies"],
    queryFn: () => {
      return getCurrencies();
    },
  });

  return (
    <div className={styles.container}>
      <Container>{data && <CurrenciesTable data={data} />}</Container>
    </div>
  );
}

export default CurrenciesPage;
