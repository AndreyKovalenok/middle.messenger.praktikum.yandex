export const validationMessages = {
  required: "Это обязательное поле",
  invalidFormat: "Неверный формат",
  invalidValue: "Некорректное значение",
  invalidSymbols: "Допустимы только А-я, A-z, -",
  passwordMinLength: (value: number) =>
    `Пароль должен содержать более ${value} символов`,
  passwordMaxLength: (value: number) =>
    `Пароль должен содержать менее ${value} символов`,
  capitalizedFirstSymbol: "Первый символ должен быть заглавной буквой",
  someCapitalize: "Обязательна хотя бы одна заглавная буква",
  someNumber: "Обязательна хотя бы одна цифра",
  loginMinLength: (value: number) =>
    `Минимальная длина логина ${value} символов`,
  loginMaxLength: (value: number) =>
    `Максимальная длина логина ${value} символов`,
  unmatchedPasswords: "Пароли не совпадают",
};
