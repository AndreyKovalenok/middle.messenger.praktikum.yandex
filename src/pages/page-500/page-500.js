import Handlebars from "handlebars";

import { ErrorPageContent, Link } from 'shared/ui'

import { template } from './page-500.tmpl'

const render = Handlebars.compile(template)

export const Page500 = (props) => render({
  content: ErrorPageContent({
    title: '500',
    description: 'Мы уже фиксим',
    link: Link({
      href: '/chats',
      children: 'Назад к чатам'
    })
  }),
  ...props
}) 