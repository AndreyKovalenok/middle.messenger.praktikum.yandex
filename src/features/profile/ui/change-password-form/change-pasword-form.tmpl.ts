import * as styles from "./style.scss";

export const template = `
  <div class="${styles.wrapper}">
    <form>
      <div class="${styles.input}">
        <div data-component="oldPasswordInput"></div>
      </div>
      <div class="${styles.input}">
        <div data-component="newPasswordInput"></div>
      </div>
      <div class="${styles.input}">
        <div data-component="repeatNewPasswordInput"></div>
      </div>
      <div class="${styles.spacer}"></div>
      <div class="${styles.button}">
        <div data-component="submitButton"></div>
      </div>
    </form>
  </div>
`;
