import { ArrowRight } from "shared/icons";

import * as styles from "./style.scss";

export const template = `
  <button class=${styles.button} type="button">
    Профиль
    <span>
      ${ArrowRight()}
    </spam>
  </button>
`;
