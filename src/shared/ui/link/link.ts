import { Block, compile } from "shared/lib";
import { router } from "shared/utils";

import { template } from "./link.tmpl";
import * as styles from "./style.scss";

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
            router.go(this.props.href);
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
