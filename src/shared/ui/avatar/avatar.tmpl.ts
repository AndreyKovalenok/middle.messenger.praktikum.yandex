import * as styles from "./style.scss";

export const template = `
  <div class=${styles.avatar}>
    {{#if src}}
      <img src={{ src }} alt="" class=${styles.image} />
    {{else}}
      <div class=${styles.fill}></div>
    {{/if}}
  </div>
`;
