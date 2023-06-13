// SPACE DATA EXERCISE 8
// Return a Planet by a given moon name
//  must have destructured parameters
export function findPlanetByMoon(data: { planets: []; moonName: string }) {
  return data.planets.find((planet: { moons: string[]; name: string }) => {
    if (planet?.moons) {
      if (
        planet.moons.filter((moon: string) => {
          return moon.toLowerCase() === data.moonName.toLowerCase();
        }).length > 0
      ) {
        return planet.name;
      }
    }
  });
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
