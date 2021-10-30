export const renderPage = (elementId: string, page: Element) => {
  const node = document.getElementById(elementId);
  node?.insertAdjacentElement("afterbegin", page);
};
