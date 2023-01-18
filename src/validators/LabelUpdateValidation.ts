import * as yup from "yup";
import { string } from "yup";

export const UpdateLabelValidator = yup.object({
  name: string().required("Label name is required"),
  email: string().required("Email is required"),
  description: string()
    .required("Label description is required")
    .min(100, "Description must be at least 100 chars long")
    .max(150, "Label description can be only 150 chars long"),
});
