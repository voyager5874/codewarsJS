//How is this 7kyu ???
//
//https://www.codesdope.com/course/algorithms-coin-change/

// The function takes cents value (int) and needs to return the minimum number of coins combination of the same value.

// The function should return an array where
// coins[0] = pennies ==> $00.01
// coins[1] = nickels ==> $00.05
// coins[2] = dimes ==> $00.10
// coins[3] = quarters ==> $00.25

// So for example:
// coinCombo(6) --> [1, 1, 0, 0]

function coinCombo(cents) {
  const coins = [1, 5, 10, 25];
  const combo = [0, 0, 0, 0];
  for (let i = 3; i >= 0 && cents > 0; i--) {
    combo[i] = Math.floor(cents / coins[i]);
    cents -= combo[i] * coins[i];
  }
  return combo;
}
