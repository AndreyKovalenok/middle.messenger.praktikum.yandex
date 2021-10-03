import styles from './style.scss'

export const template = `
  <div class="${styles.layout}">
    <p class="${styles.title}">Вход</p>
    <div class="${styles.input}">
      {{> input 
        label="Логин" 
        type="text" 
        value="ivanivanov"
        placeholder="Введите логин"
      }}
    </div>
    <div class="${styles.input}">
      {{> input 
        label="Пароль" 
        type="password" 
        value="qwerty"
        placeholder="Введите пароль"
      }}
    </div>
    <div class="${styles.spacer}"></div>
    {{> primaryButton children="Авторизоваться" }}
    <div class="${styles.hbox}"></div>
    {{> link link="/register" children="Нет аккаунта?" }}
  </div>
`  