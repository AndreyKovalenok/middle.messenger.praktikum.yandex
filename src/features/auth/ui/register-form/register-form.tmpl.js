import styles from './style.scss'

export const template = `
  <div class="${styles.layout}">
    <p class="${styles.title}">Регистрация</p>
    <div class="${styles.input}">
      {{> input 
        label="Почта" 
        type="email" 
        value="pochta@yandex.ru"
        placeholder="Введите почту"
      }}
    </div>
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
        label="Имя" 
        type="text" 
        value="Иван"
        placeholder="Введите ваше имя"
      }}
    </div>
    <div class="${styles.input}">
      {{> input 
        label="Фамилия" 
        type="text" 
        value="Иванов"
        placeholder="Введите вашу фамилию"
      }}
    </div>
    <div class="${styles.input}">
      {{> input 
        label="Телефон" 
        type="tel" 
        value="+7 (909) 967 30 30"
        placeholder="Введите телефон"
      }}
    </div>
    <div class="${styles.input}">
      {{> input 
        label="Пароль" 
        type="password" 
        value="qwerty"
        placeholder="Введите телефон"
        error="true"
      }}
    </div>
    <div class="${styles.input}">
      {{> input  
        label="Пароль (ещё раз)" 
        type="password" 
        value="qwerty"
        placeholder="Введите пароль еще раз"
        error="true"
        errorMessage="Пароли не совпадают"
      }}
    </div>
    <div class="${styles.spacer}"></div>
    {{> primaryButton children="Зарегистрироваться" }}
    <div class="${styles.hbox}"></div>
    {{> link href="/login" children="Войти" }}
  </div>
`