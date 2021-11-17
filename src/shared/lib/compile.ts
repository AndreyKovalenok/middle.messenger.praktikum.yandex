import Handlebars from "handlebars";

import { Block } from "./block/block";

export const compile = (tmpl: string, props: any = {}): DocumentFragment => {
  const components: Record<string, Block> = {};
  const fragment = document.createElement("template");

  Object.entries(props).forEach(([name, prop]) => {
    if (prop instanceof Block) {
      components[prop.id] = prop;

      props[name] = `<div id="id-${prop.id}"></div>`;
    }
  });

  fragment.innerHTML = Handlebars.compile(tmpl)(props);

  Object.entries(components).forEach(([id, component]) => {
    const stub = fragment.content.getElementById(`id-${id}`);

    if (!stub) {
      return;
    }

    stub.replaceWith(component.getContent());
  });

  return fragment.content;
};
