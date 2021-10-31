import { Block } from "shared/utils";

import { Link } from "../link";

import { template } from "./error-page-content.tmpl";

type Props = {
  title: string;
  description: string;
  href: string;
  linkText: string;
};

type RenderProps = {
  link: any;
};

export class ErrorPageContent extends Block<Props, RenderProps> {
  constructor(props: Props) {
    super({
      ...props,
      link: new Link({
        children: props.linkText,
        href: props.href,
      }),
    });
  }

  render() {
    return this.compile(template);
  }
}
