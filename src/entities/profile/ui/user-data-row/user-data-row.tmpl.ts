import * as styles from "./style.scss";

export const template = `
  <div class="${styles.row}{{#if withBorder}} ${styles.border}{{/if}}">
    <span class="${styles.label}">{{ label }}</span>
    <span class="${styles.value}">{{ value }}</span>
  </div>
`;
