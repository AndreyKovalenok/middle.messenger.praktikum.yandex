import Handlebars from "handlebars";

import { ErrorPageContent, Link } from 'shared/ui'

import { template } from './page-404.tmpl'

const render = Handlebars.compile(template)

export const Page404 = (props) => render({
  content: ErrorPageContent({
    title: '404',
    description: 'Не туда попали',
    link: Link({
      href: '/chats',
      children: 'Назад к чатам'
    })
  }),
  ...props
})