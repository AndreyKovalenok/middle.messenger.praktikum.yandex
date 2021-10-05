import styles from './style.scss'

export const template = `
  <form>
    <div class="${styles.layout}">
      <p class="${styles.title}">Вход</p>
      <div class="${styles.input}">
        {{{ loginInput }}}
      </div>
      <div class="${styles.input}">
        {{{ passwordInput }}}
      </div>
      <div class="${styles.spacer}"></div>
      {{{ submitButton }}}
      <div class="${styles.hbox}"></div>
      {{{ registrationLink }}}
    </div>
  </form>
`   