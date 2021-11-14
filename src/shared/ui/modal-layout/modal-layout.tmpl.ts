import * as styles from "./style.scss";

export const template = `
  <div class="${styles.layout}">
    <div class="${styles.content}">
      {{> @partial-block}}
    </div>
    <div class="${styles.plug}"></div>
  </div>
`;
