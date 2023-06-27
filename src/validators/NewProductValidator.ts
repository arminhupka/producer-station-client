import * as yup from "yup";

export const NewProductValidator = yup
  .object({
    name: yup.string().required("Product name is required"),
    label: yup.string().required("You must provide label"),
  })
  .required();
