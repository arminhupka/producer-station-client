import * as yup from "yup";
import { string } from "yup";

export const NewLabelFormValidator = yup.object({
  name: string()
    .min(6, "Label name must be at least 6 characters")
    .max(24, "Label name might be max 24 chars")
    .required("Label name is required"),
});
