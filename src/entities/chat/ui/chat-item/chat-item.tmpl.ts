import * as styles from "./style.scss";

export const template = `
    <div class=${styles.avatar}>
      {{{avatarComponent}}}
    </div>
    <div class=${styles.content}>
      <div class=${styles.titleRow}>
        <span class=${styles.title}>{{ title }}</span>
        <span class=${styles.time}>{{ time }}</span>
      </div>
      <div class=${styles.messageRow}>
        <span class=${styles.message}>{{ message }}</span>
        <div>
          {{{badgeComponent}}}
        </div>
      </div>
      <div>
      </div>
    </div>
`;
