function duplicateCount(text) {
  const lowCaseText = text.toLowerCase();
  const counts = [];
  for (let i = 0; i < text.length; i++) {
    let counter = 1;
    for (let j = i + 1; j < text.length; j++) {
      if (
        lowCaseText[j] === lowCaseText[i] &&
        lowCaseText.slice(0, i).indexOf(lowCaseText[i]) === -1
      ) {
        counter++;
      }
    }
    if (counter > 1) {
      counts.push(counter);
    }
  }
  return counts.length;
}
