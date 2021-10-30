import * as styles from "./style.scss";

export const template = `
  {{#> blanc-layout}}
    <div class="${styles.content}">
      <div class="${styles.asideButton}">
        <div data-component="asideButton"></div>
      </div>
      <div class="${styles.profile}">
        <div class="${styles.avatar}">
          <div data-component="avatarButton"></div>
        </div>
        <p class="${styles.name}">{{ name }}</p>
        <div data-component="profile"></div>
      </div>
    </div>
  {{/blanc-layout}}
`;
