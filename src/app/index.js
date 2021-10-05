import { 
  LoginPage, 
  RegisterPage, 
  Page500,
  Page404,
  ProfilePage,
  ChatPage
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
  '/profile': ProfilePage,
  '/500': Page500,
  '/400': Page404,
  '/chat': ChatPage 
}

const currentPage = Object.keys(baseRoutes).find((key) => locationPathname.includes(key))
   
root.innerHTML = currentPage? baseRoutes[currentPage]()  : Page404();