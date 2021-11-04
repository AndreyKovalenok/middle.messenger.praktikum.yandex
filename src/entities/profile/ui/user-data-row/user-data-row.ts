import { Block, compile } from "shared/lib";

import { template } from "./user-data-row.tmpl";
import * as styles from "./style.scss";

const getClass = (withBorder: boolean) => {
  if (withBorder) {
    return `${styles.row} ${styles.border}`;
  }

  return styles.row;
};

type Props = {
  label: string;
  value: string;
  withBorder?: boolean;
};

export class UserDataRow extends Block<Props> {
  constructor(props: Props) {
    super(props, "div", {
      class: getClass(Boolean(props.withBorder)),
    });
  }

  render() {
    return compile(template, this.props);
  }
}
