import * as styles from "./style.scss";

export const template = `
  <button type="button" class="${styles.button}">
    {{{icon}}}
    <div class="${styles.layer}"></div>
    <p class="${styles.text}">Поменять аватар</p>
  </button>
`;
