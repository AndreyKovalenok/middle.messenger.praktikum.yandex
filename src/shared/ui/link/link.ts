import { Block, compile } from "shared/lib";
import Router from "shared/lib/router";

import { template } from "./link.tmpl";
import styles from "./style.scss";

type Props = {
  href: string;
  children: string;
  isBlanc?: boolean;
};

export class Link extends Block<Props> {
  constructor(props: Props) {
    super(
      {
        ...props,
        events: {
          click: (evt: any) => {
            evt.preventDefault();
            Router.go(this.props.href);
          },
        },
      },
      "a",
      {
        href: props.href,
        class: styles.link,
      }
    );
  }

  render() {
    return compile(template, this.props);
  }
}
