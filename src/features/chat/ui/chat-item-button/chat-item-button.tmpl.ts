import * as styles from "./style.scss";

export const template = `
  <button class=${styles.button} type="button">
    {{{ children }}}
  </button>
`;
