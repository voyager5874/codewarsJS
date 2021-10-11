function inviteMoreWomen(L) {
  //coding and coding..
  let men = L.filter((item) => item === 1).length;
  let women = L.filter((item) => item === -1).length;
  return women < men;
}
