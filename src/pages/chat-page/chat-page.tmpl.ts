import * as styles from "./style.scss";

export const template = `
  {{#>blanc-layout}}
    {{# if isLoading}}
      {{{loader}}}
    {{else}}
      <div class=${styles.wrapper}>

        <div class=${styles.aside}>
          <div class=${styles.asideHeader}>
            <div class=${styles.headerButtonWrapper}>
            {{{goBackButton}}}
            </div>
            <div>
              {{{searchInput}}}
            </div>
          </div>
          <div class=${styles.divider}></div>
          <div class=${styles.chats}>
            {{{chats}}}
            <div class="${styles.addChatButton}">
              {{{addChatButton}}}
            </div>
          </div>
        </div>

        <div class=${styles.content}>
          {{#if selectedId}}
            <div class=${styles.chatHeader}>
                {{{chatHeader}}}
              <div class=${styles.divider}></div>
            </div>
            <div class=${styles.chatContent}>
              {{{chatMessages}}}
            </div>
            <div class=${styles.chatActions}>
              <div class=${styles.divider}></div>
              {{{chatActions}}}
            </div>
          {{else}}
            <div class="${styles.emptyContent}">Выберите чат чтобы отправить сообщение</div>
          {{/if}}
        </div>
      </div>
      {{#if isAddChatModalActive}}
        {{{addChatModal}}}
      {{/if}}
      {{#if isAddUserModalActive}}
        {{{addUserModal}}}
      {{/if}}
      {{#if isDeleteUserModalActive}}
        {{{deleteUserModal}}}
      {{/if}}
    {{/if}}
  {{/blanc-layout}}
`;
