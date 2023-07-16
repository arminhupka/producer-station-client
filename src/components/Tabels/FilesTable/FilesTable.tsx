import { type ReactElement } from "react";
import { type FileDto } from "../../../api/api-types";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Skeletons from "../../molecules/Skeletons/Skeletons";

interface IProps {
  data: FileDto[];
  isLoading: boolean;
  onRefetch?: () => void;
}

const FilesTable = ({ data, isLoading, onRefetch }: IProps): ReactElement => {
  return (
    <>
      <Paper>
        <Box overflow='auto'>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>LP</TableCell>
                <TableCell>Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoading && <Skeletons rows={8} cols={3} />}
              {!isLoading &&
                data.map((file, i) => (
                  <TableRow key={file._id}>
                    <TableCell width={64}>{i + 1}</TableCell>
                    <TableCell>
                      <Typography fontWeight={600}>{file.filename}</Typography>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Box>
      </Paper>
    </>
  );
};

export default FilesTable;
