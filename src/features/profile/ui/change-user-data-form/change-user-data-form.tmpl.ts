import * as styles from "./style.scss";

export const template = `
  <div class="${styles.wrapper}">
    <form>
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
        <div data-component="displayNameInput"></div>
      </div>
      <div class="${styles.input}">
        <div data-component="phoneInput"></div>
      </div>
      <div class="${styles.spacer}"></div>
      <div class="${styles.submit}">
        <div data-component="submitButton"></div>
      </div>
    </form>
  </div>
`;
