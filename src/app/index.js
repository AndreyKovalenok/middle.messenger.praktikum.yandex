import { registerPartial, compile } from "handlebars";

import { uiPartials } from "shared/ui"; 
import { registerHandlebarsHelpers } from 'shared/config'

import { AuthFormTemplate } from 'features/auth'

registerHandlebarsHelpers()

const partials = [...uiPartials];

partials.forEach(({ name, template }) => registerPartial(name, template));

const test = compile(`
  <div>
    ${AuthFormTemplate}
  </div>
`)

const root = document.getElementById("root");

root.innerHTML = test({});
 