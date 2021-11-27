function countSmileys(arr) {
  if (!arr.length) return 0;
  const validSmile = [")", "D"];
  const validNose = ["-", "~"];
  const validEyes = [":", ";"];
  let res = arr.filter((face) => {
    return (
      (face.length === 3 &&
        validSmile.includes(face[2]) &&
        validNose.includes(face[1]) &&
        validEyes.includes(face[0])) ||
      (face.length === 2 &&
        validSmile.includes(face[1]) &&
        validEyes.includes(face[0]))
    );
  });
  return res.length;
}
