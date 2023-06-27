import * as yup from "yup";

const priceRegex = /^(\d+\.\d{2})?$/;

export const UpdateProductValidator = yup.object({
  price: yup
    .string()
    .matches(priceRegex, "The value must have a price format")
    .nullable()
    .notRequired(),
  salePrice: yup
    .string()
    .matches(priceRegex, "The value must have a price format")
    .nullable()
    .notRequired(),
});
