import { Block } from "shared/utils";

import type { TDay } from "../../types";
import * as styles from "./style.scss";

type Props = {
  days: TDay[];
};

export class Messages extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const container = document.createElement("div");
    container.classList.add(styles.messages);

    this.props.days.forEach(({ date, messages }) => {
      const dateBlock = document.createElement("div");
      dateBlock.classList.add(styles.date);
      dateBlock.textContent = date;
      container.appendChild(dateBlock);

      messages.forEach(({ isUserMessage, text, time }) => {
        const messageWrapper = document.createElement("div");
        const messageBlock = document.createElement("div");
        messageWrapper.classList.add(styles.messageWrapper);
        messageBlock.classList.add(styles.message);

        messageBlock.textContent = text;

        if (isUserMessage) {
          messageWrapper.classList.add(styles.userMessageWrapper);
          messageBlock.classList.add(styles.userMessage);
        }

        messageWrapper.appendChild(messageBlock);

        container.appendChild(messageWrapper);
      });
    });

    return container;
  }
}
