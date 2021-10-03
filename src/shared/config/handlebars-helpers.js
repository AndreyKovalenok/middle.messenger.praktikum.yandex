import { registerHelper } from 'handlebars'

export const registerHandlebarsHelpers = () => {
  registerHelper("if", function(conditional, options) {
    if (conditional) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });
} 
