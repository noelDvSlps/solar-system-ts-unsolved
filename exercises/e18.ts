// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be happy

export function getGreatestDiscoveryYear(asteroids = []) {
  const myDataStructure = asteroids.reduce(
    (
      acc: [input1: number, input2: number, input3: { [key: string]: string }],
      asteroid: { discoveryYear: number; name: string }
    ) => {
      const discoveryYear = asteroid.discoveryYear;
      acc[2].hasOwnProperty(discoveryYear)
        ? (acc[2] = {
            ...acc[2],
            [discoveryYear]: [...(acc[2][discoveryYear] || []), asteroid.name],
          })
        : (acc[2] = { ...acc[2], [discoveryYear]: [asteroid.name] });
      let lengthObj: number | undefined = acc[2][discoveryYear]?.length;

      acc =
        lengthObj === undefined || lengthObj < acc[0]
          ? [acc[0], acc[1], acc[2]]
          : [lengthObj, discoveryYear, acc[2]];

      return acc;
    },
    [0, 0, {}]
  );
  return myDataStructure[1];
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
