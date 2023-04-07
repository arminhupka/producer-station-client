import { TablePagination } from "@mui/material";
import { type ReactElement } from "react";

interface IProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (event: unknown, newPage: number) => void;
}

const Pagination = ({
  rowsPerPage,
  page,
  count,
  onPageChange,
}: IProps): ReactElement => {
  return (
    <TablePagination
      component='div'
      count={count}
      page={page - 1}
      rowsPerPage={rowsPerPage}
      onPageChange={onPageChange}
    />
  );
};

export default Pagination;
