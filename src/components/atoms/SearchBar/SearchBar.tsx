import {
  type ChangeEvent,
  type Dispatch,
  type ReactElement,
  type SetStateAction,
  useEffect,
  useState,
} from "react";
import { Box, Paper, TextField } from "@mui/material";

interface IProps {
  onInputChange: Dispatch<SetStateAction<string>>;
  disabled?: boolean;
}

const SearchBar = ({ onInputChange, disabled }: IProps): ReactElement => {
  const [keyword, setKeyword] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      onInputChange(keyword);
    }, 500);

    return () => {
      clearInterval(timeout);
    };
  }, [keyword]);

  return (
    <Box mb={2}>
      <Paper>
        <Box p={2} display='flex' justifyContent='flex-end'>
          <TextField
            label='Search product'
            onChange={handleChange}
            disabled={disabled}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default SearchBar;
