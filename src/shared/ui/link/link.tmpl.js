import * as styles from './style.scss'

export const template = `
  <a href="{{ href }}" class="${styles.link}"{{#if targetBlanc}} target="_blanc"{{/if}}>{{ children }}</a>
`