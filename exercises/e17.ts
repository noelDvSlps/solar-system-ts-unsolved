export const minBy = <T>(array: T[], cb: (input: T) => number | string) => {
  const result = array.reduce(
    (acc, element) => (cb(element) < cb(acc ? acc : element) ? element : acc),
    array[0]
  );
  return result;
};

export function maxBy<T>(array: T[], cb: (input: T) => number | string) {
  const result = array.reduce(
    (acc, element) => (cb(element) > cb(acc ? acc : element) ? element : acc),
    array[0]
  );
  console.log("result", result);
  return result;
}
