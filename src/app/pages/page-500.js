import { Page500 } from 'pages'
import { renderPage } from 'shared/utils'
import { partials } from 'shared/ui'

import '../style/style.scss'

partials.forEach(p => p())

renderPage('root', Page500())