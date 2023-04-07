import { type ReactElement } from "react";
import { Skeleton, TableCell, TableRow } from "@mui/material";

interface IProps {
  rows: number;
  cols: number;
}

const Skeletons = ({ rows, cols }: IProps): ReactElement => {
  const rowsArr = Array.from(Array(rows).keys());
  const colsArr = Array.from(Array(cols).keys());

  return (
    <>
      {rowsArr.map((r) => (
        <TableRow key={r}>
          {colsArr.map((c) => (
            <TableCell key={c}>
              <Skeleton variant='rectangular' width='100%' height={20} />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
};

export default Skeletons;
