import * as yup from "yup";

const priceRegex = /^(\d+\.\d{2})?$/;

export const NewProductValidator = yup
  .object()
  .shape({
    price: yup
      .string()
      .nullable()
      .matches(priceRegex, "The value must have a price format"),
    salePrice: yup
      .string()
      .nullable()
      .matches(priceRegex, "The value must have a price format"),
  })
  .required();
