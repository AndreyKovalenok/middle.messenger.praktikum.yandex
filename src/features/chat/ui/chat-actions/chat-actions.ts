import { Block, compile } from "shared/lib";

import { ClipIcon, LeftArrowEllipse } from "shared/icons";

import { template } from "./chat-actions.tmpl";
import * as styles from "./style.scss";

type ActionsButtonProps = {
  onClick: () => void;
};

class ActionsButton extends Block<Omit<ActionsButtonProps, "onClick">> {
  constructor({ onClick, ...props }: ActionsButtonProps) {
    super(
      {
        ...props,
        events: {
          click: onClick,
        },
      },
      "button",
      {
        class: styles.actionButton,
      }
    );
  }

  render() {
    const icon = new ClipIcon();

    return compile("{{{icon}}}", { icon });
  }
}

type SubmitButtonProps = {
  onSend: () => void;
};
class SubmitButton extends Block<Omit<SubmitButtonProps, "onSend">> {
  constructor({ onSend, ...props }: SubmitButtonProps) {
    super(
      {
        ...props,
        events: {
          click: onSend,
        },
      },
      "button",
      {
        class: styles.submitButton,
      }
    );
  }

  render() {
    const icon = new LeftArrowEllipse();

    return compile("{{{icon}}}", { icon });
  }
}

type InputProps = {
  value: string;
  onChange: (evt: InputEvent) => void;
  onFocus: (evt: InputEvent) => void;
  onBlur: (evt: InputEvent) => void;
};

class Input extends Block<Omit<InputProps, "onChange" | "onBlur" | "onFocus">> {
  constructor({ onBlur, onChange, onFocus, ...props }: InputProps) {
    super(
      {
        ...props,
        events: {
          change: onChange,
          blur: onBlur,
          focus: onFocus,
        },
      },
      "input",
      {
        class: styles.textarea,
        placeholder: "Сообщение",
        value: props.value,
      }
    );
  }

  render() {
    return compile("");
  }
}

type Props = {
  messageInputValue: string;
  onChange: (evt: InputEvent) => void;
  onFocus: (evt: InputEvent) => void;
  onBlur: (evt: InputEvent) => void;
  onActionsClick: () => void;
  onSendMessage: () => void;
};
export class ChatActions extends Block<Props> {
  constructor(props: Props) {
    super(props, "div", {
      class: styles.wrapper,
    });
  }

  render() {
    const actionsButton = new ActionsButton({
      onClick: this.props.onActionsClick,
    });

    const submitButton = new SubmitButton({
      onSend: this.props.onSendMessage,
    });

    const input = new Input({
      onBlur: this.props.onBlur,
      onChange: this.props.onChange,
      onFocus: this.props.onFocus,
      value: this.props.messageInputValue,
    });

    return compile(template, { actionsButton, submitButton, input });
  }
}
