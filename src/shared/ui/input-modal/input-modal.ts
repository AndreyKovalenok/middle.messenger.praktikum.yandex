import { Block, compile } from "shared/lib";

import { template } from "./input-modal.tmpl";
import { PrimaryButton } from "../primary-button";
import { InputField } from "../input-field";
import { IconButton } from "..";
import { CloseIcon } from "shared/icons";

type Props = {
  value: string;
  inputLabel: string;
  title: string;
  buttonText: string;
  isLoading: boolean;
  onSubmit: (value: string) => Promise<unknown>;
  onClose: () => void;
};

export class InputModal extends Block<Props> {
  focus: {
    name: "input" | null;
    caretPosition: number | null;
  };

  constructor(props: Omit<Props, "value" | "isLoading">) {
    super({ ...props, value: "", isLoading: false });

    this.focus = {
      caretPosition: null,
      name: null,
    };
  }

  componentDidRender = () => {
    const inputs = this.getContent().querySelectorAll("input");
    inputs.forEach((input) => {
      if (input.name === this.focus.name) {
        input.focus();
        input.selectionStart = this.focus.caretPosition;
      }
    });
  };

  private inputChangeHandler(value: string, selectionStart: number | null) {
    this.setProps({
      ...this.props,
      value,
    });
    this.focus.caretPosition = selectionStart;
  }

  private focusHandler() {
    this.focus.name = "input";
  }

  submitHandler = async () => {
    this.setProps({
      ...this.props,
      isLoading: true,
    });

    try {
      await this.props.onSubmit(this.props.value);

      this.setProps({
        ...this.props,
        isLoading: false,
      });
    } catch (error) {
      this.setProps({
        ...this.props,
        isLoading: false,
      });
    }
  };

  render() {
    const button = new PrimaryButton({
      children: this.props.buttonText,
      onClick: this.submitHandler,
      isLoading: this.props.isLoading,
    });

    const input = new InputField({
      label: this.props.inputLabel,
      name: "input",
      onChange: (evt) => {
        const target = <HTMLInputElement>evt.target;

        this.inputChangeHandler(target.value, target.selectionStart);
      },
      onFocus: this.focusHandler.bind(this),
      onBlur: (evt) => {
        this.focus.caretPosition = (<HTMLInputElement>(
          evt.target
        )).selectionStart;
      },
      placeholder: "",
      type: "text",
      value: this.props.value,
      errorMessage: "",
    });

    const closeButton = new IconButton({
      icon: new CloseIcon(),
      onClick: this.props.onClose,
    });

    return compile(template, { ...this.props, button, input, closeButton });
  }
}
