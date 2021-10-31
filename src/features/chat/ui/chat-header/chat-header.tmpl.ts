import * as styles from "./style.scss";

export const template = `
  <div class=${styles.wrapper}>
    <div class=${styles.chatMeta}>
      <div class=${styles.avatar}>
        <div data-component="avatar"></div>
      </div>
      <span class=${styles.title}>{{ title }}</span>
    </div>
    <div class=${styles.actions}>
      <div data-component"actionsButton"></div>
    </div>
  </div>
`;
