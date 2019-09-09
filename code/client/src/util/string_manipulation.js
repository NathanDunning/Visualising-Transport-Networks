// eslint-disable-next-line import/prefer-default-export
export const capitalise = (string) => {
  if (string == null || string === '') {
    return string;
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
};
