function rgb(r, g, b) {
  const rgbValues = [...arguments];
  const normalizedRGB = rgbValues.map((value) => {
    if (value < 0) value = 0;
    if (value > 255) value = 255;
    return value;
  });
  const hexDigits = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  const hexColor = normalizedRGB.reduce((result, value) => {
    const div = Math.floor(value / 16);
    const mult = (value / 16 - div) * 16;
    const firstHalf = hexDigits[div];
    const secondHalf = hexDigits[mult];
    result += firstHalf + secondHalf;
    return result;
  }, "");
  return hexColor;
}
