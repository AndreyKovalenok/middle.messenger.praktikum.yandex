export const required = (value: string): boolean => {
  if (!value) {
    return false;
  }

  return true;
};
