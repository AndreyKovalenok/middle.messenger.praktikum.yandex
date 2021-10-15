export const renderPage = (elementId: string, page: string) => {
  const node = document.getElementById(elementId);
  node?.insertAdjacentHTML("afterbegin", page);
};
