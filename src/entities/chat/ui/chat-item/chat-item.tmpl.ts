import * as styles from "./style.scss";

export const template = `
  <div class=${styles.item}>
    <div class=${styles.avatar}>
    {{#if avatar}}
      <img src={{ avatar }} alt="" class=${styles.image} />
    {{else}}
      <div class=${styles.fill}></div>
    {{/if}}
    </div>
    <div class=${styles.content}>
      <div class=${styles.titleRow}>
        <span class=${styles.title}>{{ title }}</span>
        <span class=${styles.time}>{{ time }}</span>
      </div>
      <div class=${styles.messageRow}>
        <span class=${styles.message}>{{ message }}</span>
        <div>
          {{{ badge }}}
        </div>
      </div>
      <div>
      </div>
    </div>
  </div>
`;
