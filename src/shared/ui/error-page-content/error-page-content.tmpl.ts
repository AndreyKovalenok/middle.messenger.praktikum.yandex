import * as styles from "./styles.scss";

export const template = `
  <div class="${styles.wrapper}">
    <p class="${styles.title}">{{ title }}</p>
    <p class="${styles.description}">{{ description }}</p>
    <div data-component="link"></div>
  </div>
`;
