import * as styles from "./style.scss";

export const template = `
  <button class="${styles.button}{{#if red}} ${styles.red}{{/if}}" type="{{ type }}">{{ children }}</button>
`;
