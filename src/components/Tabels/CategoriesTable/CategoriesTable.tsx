import { type ReactElement, useState } from "react";
import { type CategoryDto } from "../../../api/api-types";
import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Skeletons from "../../molecules/Skeletons/Skeletons";
import DeleteIcon from "@mui/icons-material/Delete";
import useModalState from "../../../hooks/useModalState";
import ConfirmationModal from "../../Modals/ConfirmationModal/ConfirmationModal";
import { deleteCategory } from "../../../api/categories";

interface IProps {
  data: CategoryDto[];
  isLoading: boolean;
  onRefetch?: () => void;
}

const CategoriesTable = ({
  data,
  isLoading,
  onRefetch,
}: IProps): ReactElement => {
  const [confirmationModalText, setConfirmationModalText] =
    useState<string>("");
  const [categoryToDelete, setCategoryToDelete] = useState<string>("");
  const { isOpen, onOpen, onClose } = useModalState();

  const deleteCategoryMutation = deleteCategory({
    onSuccess: () => {
      if (onRefetch) {
        onRefetch();
      }
      onClose();
    },
  });

  isLoading = isLoading || deleteCategoryMutation.isLoading;

  const handleDelete = (id: string, title: string): void => {
    setCategoryToDelete(id);
    setConfirmationModalText(`Are you sure that you want delete ${title}`);
    onOpen();
  };

  const handleCloseConfirmationModal = (): void => {
    onClose();
    setCategoryToDelete("");
    setConfirmationModalText("");
  };

  return (
    <>
      <ConfirmationModal
        onConfirm={() => {
          deleteCategoryMutation.mutate(categoryToDelete);
        }}
        title={confirmationModalText}
        onClose={handleCloseConfirmationModal}
        open={isOpen}
        isLoading={isLoading}
      />
      <Paper>
        <Box overflow='auto'>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>LP</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Slug</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoading && <Skeletons rows={8} cols={3} />}
              {!isLoading &&
                data.map((category, i) => (
                  <TableRow key={category._id}>
                    <TableCell width={64}>{i + 1}</TableCell>
                    <TableCell>
                      <Typography fontWeight={600}>{category.name}</Typography>
                    </TableCell>
                    <TableCell>{category.slug}</TableCell>
                    <TableCell>
                      <IconButton
                        color='error'
                        onClick={() => {
                          handleDelete(category._id, category.name);
                        }}>
                        <DeleteIcon />
                      </IconButton>
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

export default CategoriesTable;
