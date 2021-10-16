import * as styles from "./style.scss";

export const template = `
  {{#>blanc-layout}}
    <div class=${styles.wrapper}>

      <div class=${styles.aside}>
        <div class=${styles.asideHeader}>
          <div class=${styles.headerButtonWrapper}>
            {{{ goBackButton }}}
          </div>
          <div>
            {{{ searchInput }}}
          </div>
        </div>
        <div class=${styles.divider}></div>
        <div class=${styles.chats}>
          {{{ chats }}}
        </div>
      </div>

      <div class=${styles.content}>
        <div class=${styles.chatHeader}>
          {{{ chatHeader }}}
          <div class=${styles.divider}></div>
        </div>
        <div class=${styles.chatContent}>
          {{{ chatMessages }}}
        </div>
        <div class=${styles.chatActions}>
          <div class=${styles.divider}></div> 
          {{{ chatActions }}}
        </div>
      </div>
    </div>
  {{/blanc-layout}}
`;
