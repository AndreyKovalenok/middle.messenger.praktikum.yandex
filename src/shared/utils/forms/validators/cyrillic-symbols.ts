export const cyrillicSymbols = (value: string): boolean =>
  /^[А-Яа-я]+$/.test(value);
