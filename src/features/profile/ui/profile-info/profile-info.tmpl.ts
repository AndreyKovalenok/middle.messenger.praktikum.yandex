import * as styles from "./style.scss";

export const template = `
  <div class="${styles.profileInfo}">
    <div class="${styles.content}">{{{ content }}}</div>
    <div class="${styles.controls}">
      <div class="${styles.row} ${styles.border}">{{{ changeDataButton }}}</div>
      <div class="${styles.row} ${styles.border}">{{{ changePasswordButton }}}</div>
      <div class="${styles.row}">{{{ logoutButton }}}</div>
    </div>
  </div>
`;