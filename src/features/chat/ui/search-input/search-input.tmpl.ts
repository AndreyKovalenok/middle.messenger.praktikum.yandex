import { SearchIcon } from "shared/icons";

import * as styles from "./style.scss";

export const template = `
  <div class=${styles.wrapper}>
    <div class=${styles.iconWrapper}>
      ${SearchIcon()}
    </div>
    <label class=${styles.label}>
      <input class=${
        styles.input
      } type="text" value="{{ value }}" placeholder="Поиск" />
    </label>
  </div>
`;
