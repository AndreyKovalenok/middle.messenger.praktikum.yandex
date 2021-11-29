import * as styles from "./style.scss";

export const template = `
  {{#> blanc-layout}}
    <div class="${styles.content}">
      <div class="${styles.asideButton}">
        {{{asideButton}}}
      </div>
      <div class="${styles.profile}">
        {{#if isLoading}}
          {{{loader}}}
        {{else}}
          <div class="${styles.avatar}">
            {{{avatarButton}}}
          </div>
          <p class="${styles.name}">{{name}}</p>
          {{{profile}}}
        {{/if}}
      </div>
    </div>
  {{/blanc-layout}}
  {{{changeAvatarModal}}}
`;
