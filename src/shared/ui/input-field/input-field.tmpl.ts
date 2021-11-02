import * as styles from "./style.scss";

export const template = `
  <div class="${styles.wrapper}">
    {{#if label}}
      <span class=${styles.label}>{{ label }}</span>
    {{/if}}
    <div data-component="input"></div>
    <span class=${styles.error}>{{ errorMessage }}</span>
  </div>
`;
