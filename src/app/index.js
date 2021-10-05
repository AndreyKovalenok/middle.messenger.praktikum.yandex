import { 
  LoginPage, 
  RegisterPage, 
  Page500,
  Page404
} from 'pages'
import { partials } from 'shared/ui'

import './style/style.scss'

partials.forEach(partial => partial())

const root = document.getElementById("root");

const locationPathname = window.location.pathname

if (locationPathname === '/') {
  window.location.replace('/login')
}

const baseRoutes = {
  '/login': LoginPage,
  '/registration': RegisterPage,
  '/500': Page500,
  '/400': Page404
}

const currentPage = baseRoutes[locationPathname]
   
root.innerHTML = currentPage?.() ?? Page404();