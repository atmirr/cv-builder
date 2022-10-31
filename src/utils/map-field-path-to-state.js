export const mapFieldPathToState = (path, state) => {
  const result = path.reduce((result, index) => {
    if (typeof index === "number") {
      const [item] = result?.items?.filter(({ id }) => id === index);
      return item;
    } else {
      return result[index];
    }
  }, state);
  return result;
};
