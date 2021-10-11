function inviteMoreWomen(L) {
  return (
    L.reduce((total, current) => {
      return total + current;
    }, 0) > 0
  );
}
