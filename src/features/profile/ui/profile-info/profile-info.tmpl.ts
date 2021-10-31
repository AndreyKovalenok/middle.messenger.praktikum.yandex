import * as styles from "./style.scss";

export const template = `
  <div class="${styles.profileInfo}">
    <div class="${styles.content}">
      <div data-component="emailComponent"></div>
      <div data-component="loginComponent"></div>
      <div data-component="nameComponent"></div>
      <div data-component="surnameComponent"></div>
      <div data-component="chatNameComponent"></div>
      <div data-component="phoneComponent"></div>
    </div>
    <div class="${styles.controls}">
      <div class="${styles.row} ${styles.border}">
        <div data-component="changeDataButton"></div>
      </div>
      <div class="${styles.row} ${styles.border}">
        <div data-component="changePasswordButton"></div>
      </div>
      <div class="${styles.row}">
        <div data-component="logoutButton"></div>
      </div>
    </div>
  </div>
`;
