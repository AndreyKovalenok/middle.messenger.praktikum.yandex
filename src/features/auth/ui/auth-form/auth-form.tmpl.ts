import * as styles from "./style.scss";

export const template = `
  <form>
    <div class="${styles.layout}">
      <p class="${styles.title}">Вход</p>
      <div class="${styles.input}">
        <div data-component="loginInput"></div>
      </div>
      <div class="${styles.input}">
        <div data-component="passwordInput"></div>
        </div>
      <div class="${styles.spacer}"></div>
        <div data-component="submitButton"></div>
      <div class="${styles.hbox}"></div>
      <div data-component="registrationLink"></div>
    </div>
  </form>
`;
