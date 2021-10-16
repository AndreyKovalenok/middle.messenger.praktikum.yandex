import * as styles from "./style.scss";

export const template = `
  <button class="${styles.button}{{#if isSelected}} ${styles.selected}{{/if}}" type="button">
    {{{ children }}}
  </button>
`;
