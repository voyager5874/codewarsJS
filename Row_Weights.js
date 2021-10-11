function rowWeights(array) {
  //your code here
  const team1 = [];
  const team2 = [];
  for (let i = 0; i < array.length; i++) {
    if (team2.length === team1.length) {
      team1.push(array[i]);
    } else {
      team2.push(array[i]);
    }
  }
  let team1Weight;
  let team2Weight;

  team1Weight = team1.reduce((total, current) => total + current);
  if (team2.length > 0) {
    team2Weight = team2.reduce((total, current) => total + current);
  } else {
    team2Weight = 0;
  }
  return [team1Weight, team2Weight];
}
