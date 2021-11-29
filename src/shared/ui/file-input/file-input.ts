import { Block, compile } from "shared/lib";

type Props = {
  name: string;
  onChange: (evt: any) => void;
};

export class FileInput extends Block<Omit<Props, "onChange">> {
  constructor({ onChange, ...props }: Props) {
    super(
      {
        ...props,
        events: {
          change: onChange,
        },
      },
      "input",
      { type: "file", name: props.name }
    );
  }

  render() {
    return compile("", this.props);
  }
}
