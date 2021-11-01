import { required, cyrillicSymbols, latinSymbols } from ".";
import { validationMessages } from "../messages";

export const name = (value: string) => {
  if (!required(value)) {
    return validationMessages.required;
  }

  if (!cyrillicSymbols(value) && !latinSymbols(value)) {
    return validationMessages.invalidSymbols;
  }

  if (value[0] !== value[0].toUpperCase()) {
    return validationMessages.capitalizedFirstSymbol;
  }
};
