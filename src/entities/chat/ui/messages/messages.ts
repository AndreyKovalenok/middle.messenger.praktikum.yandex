import { Block, compile } from "shared/lib";

import type { TDay, TMessage } from "../../types";
import styles from "./style.scss";
import { MessagesDate } from "../messages-date";
import { Message } from "../message";

type Props = {
  days: TDay[];
};

export class Messages extends Block<Props> {
  constructor(props: Props) {
    super(props, "div", { class: styles.messages });
  }

  render() {
    const flat: (string | TMessage)[] = this.props.days.reduce(
      (acc, { date, messages }) => [...acc, date, ...messages],
      [] as (string | TMessage)[]
    );

    return flat.map((item) => {
      if (typeof item === "string") {
        return compile("{{{content}}}", {
          content: new MessagesDate({ text: item }),
        });
      }

      return compile("{{{content}}}", {
        content: new Message({
          children: item.text,
          isUserMessage: item.isUserMessage,
        }),
      });
    });
  }
}
