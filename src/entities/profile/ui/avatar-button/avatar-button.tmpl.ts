import styles from "./style.scss";

export const template = `
  <button type="button" class="${styles.button}">
    {{#if src}}
      <img src="https://ya-praktikum.tech/api/v2/resources/{{src}}" />
    {{else}}
      {{{icon}}}
    {{/if}}
    <div class="${styles.layer}"></div>
    <p class="${styles.text}">Поменять аватар</p>
  </button>
`;
