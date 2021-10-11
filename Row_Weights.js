function rowWeights(array) {
  //your code here
  let team1Weight = array
    .filter((item, index) => index % 2 === 0)
    .reduce((total, current) => total + current, 0);
  let team2Weight = array
    .filter((item, index) => index % 2 !== 0)
    .reduce((total, current) => total + current, 0);
  return [team1Weight, team2Weight];
}
