import { LoginPage, RegisterPage, Page500 } from 'pages'
import { partials } from 'shared/ui'

import './style/style.scss'

partials.forEach(partial => partial())

const root = document.getElementById("root");

root.innerHTML = Page500();
   