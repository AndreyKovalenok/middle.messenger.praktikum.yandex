import { Block, compile } from "shared/lib";

import { PrimaryButton, FileInputField } from "shared/ui";
import { template } from "./change-avatar-modal.tmpl";
import * as styles from "./style.scss";

const getWrapperClass = (isActive: boolean) => {
  if (isActive) {
    return `${styles.wrapper} ${styles.active}`;
  }

  return styles.wrapper;
};

type Props = {
  isActive: boolean;
  isLoading: boolean;
  file: File | null;
  onSubmit: (file: File) => void;
};

export class ChangeAvatarModal extends Block<Props> {
  constructor(props: Omit<Props, "isLoading" | "file">) {
    super(
      {
        ...props,
        isLoading: false,
        file: null,
      },
      "div",
      {
        class: getWrapperClass(props.isActive),
      }
    );
  }

  render() {
    const button = new PrimaryButton({
      children: "Поменять",
      isLoading: this.props.isLoading,
      onClick: async () => {
        this.setProps({ ...this.props, isLoading: true });

        if (this.props.file) {
          await this.props.onSubmit(this.props.file);
        }

        this.setProps({ ...this.props, isLoading: false });
      },
    });

    const fileInput = new FileInputField({
      name: "avatar",
      text: "Выбрать файл на компьютере",
      onChange: (evt) => {
        const file = evt.target.files[0];

        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = () => {
          this.setProps({
            ...this.props,
            file,
          });
        };
      },
    });

    return compile(template, {
      title: "Загрузите файл",
      button,
      fileInput,
      fileName: this.props.file ? this.props.file.name : undefined,
    });
  }
}
