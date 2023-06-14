export const minBy = (array: any[], cb: (input: any) => number) => {
  const result = array.reduce(
    (acc, element) => (cb(element) < cb(acc) ? element : acc),
    array[0]
  );
  console.log("result", result);
  return result;
};

export function maxBy<T>(array: T[], cb: (input: T) => number) {
  const result = array.reduce(
    (acc, element) => (cb(element) > cb(acc ? acc : element) ? element : acc),
    array[0]
  );
  console.log("result", result);
  return result;
}
