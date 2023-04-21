export const formatPrice = (value: number, sign?: boolean): string => {
  const options: Intl.NumberFormatOptions = {
    currency: "USD",
    style: "currency",
  };

  const formatter = new Intl.NumberFormat("en-US", options);

  if (!sign) {
    return formatter.format(value / 100).slice(1);
  }

  return formatter.format(value / 100);
};
