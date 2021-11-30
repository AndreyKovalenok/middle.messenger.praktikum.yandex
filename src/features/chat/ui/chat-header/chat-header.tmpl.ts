import styles from "./style.scss";

export const template = `
  <div class=${styles.chatMeta}>
    <div class=${styles.avatar}>
      {{{avatar}}}
    </div>
    <span class=${styles.title}>{{ title }}</span>
  </div>
  <div class=${styles.actions}>
    {{{actionsButton}}}
    {{#if isOpen}}
      <div class="${styles.dropdown}">
        {{{addUserButton}}}
        {{{removeUserButton}}}
      </div>
    {{/if}}
  </div>
`;
