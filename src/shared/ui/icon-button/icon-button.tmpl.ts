import * as styles from "./style.scss";

export const template = `{{#if icon}}{{{icon}}}{{/if}}{{#if text}}<div class="${styles.text}">{{text}}</div>{{/if}}`;
