import * as styles from "./style.scss";

export const template = `
  <form>
    <div class="${styles.layout}">
    <p class="${styles.title}">Регистрация</p>
    <div class="${styles.input}">
      <div data-component="emailInput"></div>
    </div>
    <div class="${styles.input}">
      <div data-component="loginInput"></div>
    </div>
    <div class="${styles.input}">
      <div data-component="nameInput"></div>
    </div>
    <div class="${styles.input}">
      <div data-component="surnameInput"></div>
    </div>
    <div class="${styles.input}">
      <div data-component="phoneInput"></div>
    </div>
    <div class="${styles.input}">
      <div data-component="passwordInput"></div>
    </div>
    <div class="${styles.input}">
      <div data-component="repeatPasswordInput"></div>
    </div>
    <div class="${styles.spacer}"></div>
      <div data-component="submitButton"></div>
    <div class="${styles.hbox}"></div>
      <div data-component="loginLink"></div>
    </div>
  </form>
`;
