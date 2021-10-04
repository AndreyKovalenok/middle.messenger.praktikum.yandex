import { LoginPage } from 'pages'
import { partials } from 'shared/ui'

import './style/style.scss'

partials.forEach(partial => partial())

const root = document.getElementById("root");

root.innerHTML = LoginPage();
   