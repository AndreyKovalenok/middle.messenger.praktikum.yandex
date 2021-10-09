export const renderPage = (elementId, page) => {
  const node = document.getElementById(elementId);
  node.insertAdjacentHTML('afterbegin', page)
}