import * as styles from "./style.scss";

export const template = `
  <div class="${styles.wrapper}">
    {{#if label}}
      <span class=${styles.label}>{{ label }}</span>
    {{/if}}
    {{{input}}}
    {{#if errorMessage}}
      <span class=${styles.error}>{{ errorMessage }}</span>
    {{/if}}
  </div>
`;
