export const createElement = (html: string) => {
  const wrapper = document.createElement("div");
  wrapper.insertAdjacentHTML("afterbegin", html);

  return wrapper.children[0];
};
