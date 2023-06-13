export const minBy = (array: {}[], cb: (person: {} | undefined) => number) => {
  const result = array.reduce(
    (acc, element) => (cb(element) < cb(acc) ? element : acc),
    array[0]
  );
  console.log("result", result);
  return result;
};

export function maxBy(array: {}[], cb: (person: {} | undefined) => number) {
  const result = array.reduce(
    (acc, element) => (cb(element) > cb(acc) ? element : acc),
    array[0]
  );
  console.log("result", result);
  return result;
}
