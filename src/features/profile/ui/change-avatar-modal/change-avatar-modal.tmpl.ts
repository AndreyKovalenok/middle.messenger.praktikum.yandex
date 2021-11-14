import * as styles from "./style.scss";

export const template = `
  {{#> modal-layout}}
    <div class="${styles.modal}">
      <p class="${styles.title}">{{title}}</p>
      <div class="${styles.inputWrapper}">
        {{#if fileName}}
          <span class="${styles.fileName}">{{fileName}}</span>
        {{else}}
          {{{fileInput}}}
        {{/if}}
        </div>
      {{{button}}}
    </div>
  {{/modal-layout}}
`;
