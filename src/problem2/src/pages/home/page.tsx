import {
  Avatar,
  Button,
  Container,
  FilledInput,
  FormControl,
  FormHelperText,
  Grid2,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import styles from "./page.module.scss";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import { useQuery } from "@tanstack/react-query";
import { getCurrencies } from "../../services/currency.service";
import { useEffect, useState } from "react";
import { getIcon } from "../../utils/helper.functions";
import { useForm, SubmitHandler } from "react-hook-form";

interface Inputs {
  sendAmount: number;
}

const initCurrency: ICurrency = {
  currency: "",
  date: "",
  price: 0,
};

function HomePage() {
  const [sendCurrency, setSendCurrency] = useState(initCurrency);
  const [receiveCurrency, setReceiveCurrency] = useState(initCurrency);

  const [receiveAmount, setReceiveAmount] = useState(0);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      sendAmount: 0,
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setLoading(true);
    const { sendAmount } = data;

    const exchangeRate = sendCurrency.price / receiveCurrency.price;

    setTimeout(() => {
      setLoading(false);
      setReceiveAmount(exchangeRate * sendAmount);
    }, 3000);
  };

  const { data } = useQuery({
    queryKey: ["fetchCurrencies"],
    queryFn: () => {
      return getCurrencies();
    },
  });

  const handleChangeSendCurrency = (value: string) => {
    if (data) {
      const arr = value.split("-");
      const selectedCurrency = arr[0];
      const selectedPrice = arr[1];

      const selected = data.find(
        (item) =>
          item.currency === selectedCurrency && item.price === +selectedPrice
      );
      if (selected) setSendCurrency(selected);
    }
  };

  const handleChangeReceiveCurrency = (value: string) => {
    if (data) {
      const arr = value.split("-");
      const selectedCurrency = arr[0];
      const selectedPrice = arr[1];

      const selected = data.find(
        (item) =>
          item.currency === selectedCurrency && item.price === +selectedPrice
      );
      if (selected) setReceiveCurrency(selected);
    }
  };

  useEffect(() => {
    if (data && data.length >= 2) {
      setSendCurrency(data[0]);
      setReceiveCurrency(data[1]);
    }
  }, [data]);

  return (
    <div className={styles.container}>
      <Container>
        <Grid2 container>
          <Grid2 size={{ xs: 12, lg: 8 }} className={styles.title}>
            Seamless Currency Exchange, Anytime, Anywhere.
          </Grid2>
        </Grid2>

        <Grid2
          component={"form"}
          container
          className={styles.form}
          spacing={2}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Grid2 flex={{ md: 1 }} size={12}>
            {data && (
              <FormControl fullWidth variant="filled">
                <InputLabel>Send Amount</InputLabel>
                <FilledInput
                  {...register("sendAmount", {
                    required: "* Must specify send amount",
                    pattern: {
                      value: /^-?\d+(\.\d+)?$/,
                      message: "* Please enter a valid number",
                    },
                    min: {
                      value: 0,
                      message: "* Must be a positive number",
                    },
                  })}
                  sx={{
                    borderRadius: 3,
                    backgroundColor: "white",
                    border: "1px solid #ccc",
                    fontSize: "2rem",
                  }}
                  disableUnderline
                  endAdornment={
                    <InputAdornment position="end">
                      <img
                        src={getIcon(sendCurrency.currency)?.image}
                        style={{ marginRight: 10 }}
                        width={30}
                      />
                      <FormControl variant="standard">
                        <Select
                          value={
                            sendCurrency.currency
                              ? `${sendCurrency.currency}-${sendCurrency.price}`
                              : ""
                          }
                          onChange={(e) =>
                            handleChangeSendCurrency(e.target.value + "")
                          }
                          disableUnderline
                          MenuProps={{ PaperProps: { sx: { maxHeight: 300 } } }}
                        >
                          <MenuItem value="" disabled>
                            <em>Select currency</em>
                          </MenuItem>
                          {data?.map((currency, index) => {
                            return (
                              <MenuItem
                                key={`send-${index}`}
                                value={`${currency.currency}-${currency.price}`}
                              >
                                {currency.currency}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </InputAdornment>
                  }
                />
              </FormControl>
            )}
          </Grid2>

          <Grid2
            container
            size={0.8}
            justifyContent={"center"}
            alignItems={"center"}
            display={{ xs: "none", md: "flex" }}
          >
            <Avatar
              sx={{ width: "100%", height: "70%", backgroundColor: "#ebebeb" }}
            >
              <SyncAltIcon sx={{ color: "black" }} />
            </Avatar>
          </Grid2>

          <Grid2 flex={{ md: 1 }} size={12}>
            <FormControl fullWidth variant="filled">
              <InputLabel>Receive Amount</InputLabel>
              <FilledInput
                readOnly
                value={receiveAmount}
                sx={{
                  borderRadius: 3,
                  backgroundColor: "white",
                  border: "1px solid #ccc",
                  fontSize: "2rem",
                }}
                disableUnderline
                endAdornment={
                  <InputAdornment position="end">
                    <img
                      src={getIcon(receiveCurrency.currency)?.image}
                      style={{ marginRight: 10 }}
                      width={30}
                    />
                    <FormControl variant="standard">
                      <Select
                        value={
                          receiveCurrency.currency
                            ? `${receiveCurrency.currency}-${receiveCurrency.price}`
                            : ""
                        }
                        onChange={(e) =>
                          handleChangeReceiveCurrency(e.target.value + "")
                        }
                        disableUnderline
                        MenuProps={{ PaperProps: { sx: { maxHeight: 300 } } }}
                      >
                        <MenuItem value="" disabled>
                          <em>Select currency</em>
                        </MenuItem>
                        {data?.map((currency, index) => {
                          return (
                            <MenuItem
                              key={`send-${index}`}
                              value={`${currency.currency}-${currency.price}`}
                            >
                              {currency.currency}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid2>

          {errors.sendAmount && (
            <Grid2 size={12}>
              <FormHelperText error>{errors.sendAmount.message}</FormHelperText>
            </Grid2>
          )}

          <Grid2 size={12} textAlign={"right"} mt={3}>
            <Button
              loading={loading}
              type="submit"
              variant="contained"
              sx={{ textTransform: "capitalize" }}
              color="secondary"
            >
              Exchange
            </Button>
          </Grid2>
        </Grid2>
      </Container>
    </div>
  );
}

export default HomePage;
