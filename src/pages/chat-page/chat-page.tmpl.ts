import * as styles from "./style.scss";

export const template = `
  {{#>blanc-layout}}
    <div class=${styles.wrapper}>

      <div class=${styles.aside}>
        <div class=${styles.asideHeader}>
          <div class=${styles.headerButtonWrapper}>
          <div data-component="goBackButton"></div>
          </div>
          <div>
            <div data-component="searchInput"></div>
          </div>
        </div>
        <div class=${styles.divider}></div>
        <div class=${styles.chats}>
          <div data-component="chats"></div>
        </div>
      </div>

      <div class=${styles.content}>
        <div class=${styles.chatHeader}>
          <div data-component="chatHeader"></div>
          <div class=${styles.divider}></div>
        </div>
        <div class=${styles.chatContent}>
          <div data-component="chatMessages"></div>
        </div>
        <div class=${styles.chatActions}>
          <div class=${styles.divider}></div>
          <div data-component="chatActions"></div>
        </div>
      </div>
    </div>
  {{/blanc-layout}}
`;
