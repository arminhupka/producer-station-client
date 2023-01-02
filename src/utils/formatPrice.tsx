import Dinero from "dinero.js";

const formatPrice = (price: number): string => Dinero({ amount: price, currency: "USD" }).toFormat("$0.00");

export default formatPrice;
