import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import dayjs from "dayjs";
import { getIcon } from "../../utils/helper.functions";

interface IProps {
  data: ICurrency[];
}

function CurrenciesTable(props: IProps) {
  const { data } = props;

  return (
    <TableContainer
      component={Paper}
      sx={{ backgroundColor: "#181d29", boxShadow: "none" }}
    >
      <Table sx={{ minWidth: 650, color: "white" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell>Currency</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="right">Unit Price ($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              hover
              key={`${row.currency}-${index}`}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                sx={{ display: "flex", alignItems: "center", gap: 2 }}
              >
                <img src={getIcon(row.currency)?.image} style={{ width: 30 }} />{" "}
                {row.currency}
              </TableCell>
              <TableCell align="center">
                {dayjs(row.date).format("DD/MM/YYYY")}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CurrenciesTable;
