import styles from "./style.scss";

export const template = `
  <div class="${styles.wrapper}">
    <form>
      <div class="${styles.input}">
        {{{oldPasswordInput}}}
      </div>
      <div class="${styles.input}">
        {{{newPasswordInput}}}
      </div>
      <div class="${styles.input}">
        {{{repeatNewPasswordInput}}}
      </div>
      <div class="${styles.spacer}"></div>
      <div class="${styles.button}">
        {{{submitButton}}}
      </div>
    </form>
  </div>
`;
