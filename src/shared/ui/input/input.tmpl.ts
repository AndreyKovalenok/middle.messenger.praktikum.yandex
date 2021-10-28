import * as styles from "./styles.scss";

export const template = `
  <input
    type="{{ type }}"
    value="{{ value }}"
    placeholder="{{ placeholder }}"
    name={{ name }}
    class="${styles.input}{{#if error}} ${styles.inputError}{{/if}}"
  />
`;
