import * as styles from './style.scss'

export const template = `
  <form>
    <div class="${styles.layout}">
    <p class="${styles.title}">Регистрация</p>
    <div class="${styles.input}">
      {{{ emailInput }}}
    </div>
    <div class="${styles.input}">
      {{{ loginInput }}}
    </div>
    <div class="${styles.input}">
      {{{ nameInput }}}
    </div>
    <div class="${styles.input}">
      {{{ surnameInput }}}
    </div>
    <div class="${styles.input}">
      {{{ phoneInput }}}
    </div>
    <div class="${styles.input}">
      {{{ passwordInput }}}
    </div>
    <div class="${styles.input}">
      {{{ repeatPasswordInput }}}
    </div>
    <div class="${styles.spacer}"></div>
    {{{ submitButton }}}
    <div class="${styles.hbox}"></div>
    {{{ loginLink }}}
    </div>
  </form>
` 