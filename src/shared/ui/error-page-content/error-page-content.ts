import { Block, compile } from "shared/lib";

import { Link } from "../link";
import { template } from "./error-page-content.tmpl";
import * as styles from "./styles.scss";

type Props = {
  title: string;
  description: string;
  href: string;
  linkText: string;
};

export class ErrorPageContent extends Block<Props> {
  constructor(props: Props) {
    super(props, "div", {
      class: styles.wrapper,
    });
  }

  render() {
    const link = new Link({
      children: this.props.linkText,
      href: this.props.href,
    });

    return compile(template, { ...this.props, link });
  }
}
