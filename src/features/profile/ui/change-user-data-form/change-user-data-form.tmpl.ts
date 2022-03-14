import styles from "./style.scss";

export const template = `
    <form>
      <div class="${styles.input}">
        {{{emailInput}}}
      </div>
      <div class="${styles.input}">
        {{{loginInput}}}
      </div>
      <div class="${styles.input}">
        {{{nameInput}}}
      </div>
      <div class="${styles.input}">
        {{{surnameInput}}}
      </div>
      <div class="${styles.input}">
        {{{displayNameInput}}}
      </div>
      <div class="${styles.input}">
        {{{phoneInput}}}
      </div>
      <div class="${styles.spacer}"></div>
      <div class="${styles.submit}">
        {{{submitButton}}}
      </div>
    </form>
`;
