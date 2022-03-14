import styles from "./style.scss";

export const template = `
  <div class=${styles.wrapper}>
    <div class=${styles.iconWrapper}>
      {{{icon}}}
    </div>
    <label class=${styles.label}>
      {{{input}}}
    </label>
  </div>
`;
