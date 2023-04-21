import {
  type ChangeEvent,
  type Dispatch,
  type ReactElement,
  type SetStateAction,
} from "react";
import { Box, Paper, TextField } from "@mui/material";

interface IProps {
  onInputChange: Dispatch<SetStateAction<string>>;
  disabled?: boolean;
}

const SearchBar = ({ onInputChange, disabled }: IProps): ReactElement => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInterval(() => {
      if (e.target.value.length > 3) {
        onInputChange(e.target.value);
      }
    }, 3000);

    if (e.target.value === "") {
      onInputChange(e.target.value);
    }
  };

  return (
    <Box mb={2}>
      <Paper>
        <Box p={2} display='flex' justifyContent='flex-end'>
          <TextField
            label='Search product'
            onChange={handleInputChange}
            disabled={disabled}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default SearchBar;
