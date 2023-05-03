import { type ReactElement } from "react";
import { Box, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { type IRegisterForm } from "../RegisterForm";

const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas elit et mauris euismod vehicula. Phasellus tempus turpis lacus, non pulvinar elit molestie et. Quisque tempus sapien diam, vel imperdiet risus fringilla eu. Phasellus egestas ultrices ligula, vel auctor lorem euismod vel. Donec vitae ipsum enim. Phasellus viverra mollis turpis, et porta libero efficitur eget. Praesent in nulla convallis, volutpat metus a, venenatis ligula.";

const RegisterStepOne = (): ReactElement => {
  const { register, getValues } = useFormContext<IRegisterForm>();
  return (
    <Box>
      <TextField multiline rows={10} value={loremIpsum} fullWidth />
      <FormControlLabel
        control={
          <Checkbox
            defaultChecked={getValues("agreementChecked")}
            {...register("agreementChecked")}
          />
        }
        label='I agree to the terms and conditions'
      />
    </Box>
  );
};

export default RegisterStepOne;
