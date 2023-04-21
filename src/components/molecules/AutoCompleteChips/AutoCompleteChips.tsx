import { type ReactElement } from "react";
import { Autocomplete, Checkbox, TextField } from "@mui/material";
import {
  type CategoryDto,
  type UpdateProductDto,
} from "../../../api/api-types";
import { useFormContext } from "react-hook-form";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

interface IProps {
  data: CategoryDto[];
  productCategories: CategoryDto[];
  disabled?: boolean;
}

const AutoCompleteChips = ({
  data,
  productCategories,
  disabled,
}: IProps): ReactElement => {
  const { setValue } = useFormContext<UpdateProductDto>();

  const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
  const checkedIcon = <CheckBoxIcon fontSize='small' />;

  return (
    <Autocomplete
      disabled={disabled}
      multiple
      disableCloseOnSelect
      id='tags-standard'
      options={data}
      readOnly={disabled}
      getOptionLabel={(option) => option.name}
      isOptionEqualToValue={(option, value) => option._id === value._id}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.name}
        </li>
      )}
      defaultValue={productCategories}
      renderInput={(params) => (
        <TextField {...params} variant='outlined' label='Categories' />
      )}
      onChange={(_, v) => {
        const categoriesId = v.map((c) => c._id);
        setValue("category", categoriesId);
      }}
    />
  );
};

export default AutoCompleteChips;
