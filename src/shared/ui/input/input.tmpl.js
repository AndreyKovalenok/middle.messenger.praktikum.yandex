import styles from './style.scss'

export const template = `
  <div class="${styles.wrapper}">
    {{#if label}}
      <span class=${styles.label}>{{ label }}</span>
    {{/if}}
    <input type="{{ type }}" class="${styles.input}{{#if error}} ${styles.inputError}{{/if}}" />
    {{#if error}}
      <span class=${styles.error}>{{ error }}</span>
    {{/if}}
  </div>
`