import styles from "./style.scss";

export const template = `
  <div class="${styles.modal}">
    {{#> modal-layout}}
      <div class="${styles.content}">
        <p class="${styles.title}">{{title}}</p>
        <div class="${styles.input}">{{{input}}}</div>
        {{{button}}}
        <div class="${styles.closeButton}">
          {{{closeButton}}}
        </div>
      </div>
    {{/modal-layout}}
  </div>
`;
