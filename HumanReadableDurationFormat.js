function formatDuration(seconds) {
  if (seconds === 0) {
    return "now";
  }
  if (seconds < 0) {
    return "you can't go back";
  }
  //Some magic
  const secondsInMinute = 60;
  const secondsInHour = 60 * 60;
  const secondsInDay = 24 * 60 * 60;
  const secondsInYear = 365 * 24 * 60 * 60;
  let sec = 1;
  const inSeconds = [
    secondsInYear,
    secondsInDay,
    secondsInHour,
    secondsInMinute,
    sec,
  ];
  const intervalNames = ["years", "days", "hours", "minutes", "seconds"];

  let rem = seconds;

  let res = {};
  let interval = [];
  let resString = "";
  for (let i = 0; i < inSeconds.length; i++) {
    res[intervalNames[i]] = Math.floor(rem / inSeconds[i]);
    rem -= res[intervalNames[i]] * inSeconds[i];
  }
  for (let key in res) {
    if (res[key] > 1) {
      interval.push(`${res[key]} ${key}`);
    }
    if (res[key] === 1) {
      interval.push(`${res[key]} ${key.slice(0, -1)}`);
    }
  }
  if (interval.length === 1) {
    return interval[0];
  } else {
    for (let i = 0; i < interval.length; i++) {
      if (i <= interval.length - 2) {
        resString += interval[i];
      }
      if (i < interval.length - 2) {
        resString += ", ";
      }
      if (i > interval.length - 2) {
        resString += " and " + interval[i];
      }
    }
  }
  return resString;
}
