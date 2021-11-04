import { ClipIcon, LeftArrowEllipse } from "shared/icons";

import * as styles from "./style.scss";

export const template = `
  <div class=${styles.wrapper}>
    <button class=${styles.actionButton} type="button">${ClipIcon()}</button>
    <div class=${styles.input}>
      <input
        class=${styles.textarea}
        placeholder="Сообщение"
        value="{{ value }}"
      />
    </div>
    <button class=${styles.submitButton} type="button"></button>
  </div>
`;
