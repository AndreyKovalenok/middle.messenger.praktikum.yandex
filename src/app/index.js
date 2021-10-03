import { registerPartial } from "handlebars";

import { uiPartials } from "shared/ui"; 
import { registerHandlebarsHelpers } from 'shared/config'

registerHandlebarsHelpers()

const partials = [...uiPartials];

partials.forEach(({ name, template }) => registerPartial(name, template));

const root = document.getElementById("root");

root.innerHTML = '';
 