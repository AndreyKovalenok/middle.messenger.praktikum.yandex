import { partials } from "shared/ui";

export const registerPartials = () => {
  partials.forEach((p) => p());
};
