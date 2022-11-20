import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { PropsWithChildren, ReactNode } from "react";

interface IProps<ObjectType> {
  headings: string[];
  data: Array<{
    id: keyof ObjectType;
    values: Array<string | number>;
    buttons?: ReactNode | ReactNode[];
  }>;
}

const Tabel = <ObjectType,>(props: PropsWithChildren<IProps<ObjectType>>) => (
  <Paper>
    <Table>
      <TableHead>
        <TableRow>
          {props.headings.map((heading) => (
            <TableCell key={heading}>{heading}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {props.data.map((data) => (
          <TableRow key={String(data.id)}>
            {Object.values(data.values).map((value) => (
              <TableCell key={value}>{value}</TableCell>
            ))}
            {/* eslint-disable-next-line @typescript-eslint/strict-boolean-expressions */}
            {data.buttons && <TableCell>{data.buttons}</TableCell>}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Tabel;
