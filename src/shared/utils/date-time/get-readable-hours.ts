export const getReadableHours = (date: Date | string | number) => {
  const dateObj = date instanceof Date ? date : new Date(date);

  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();

  return `${hours}:${minutes}`;
};
