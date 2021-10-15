function formatDuration(seconds) {
  if (seconds === 0) {
    return "now";
  }
  if (seconds < 0) {
    return "you can't go back";
  }
  //Some magic
  const secondsInMinute = 60;
  const secondsInHour = 3600;
  const secondsInDay = 86400;
  const secondsInYear = 31536000;

  let rem = seconds;

  let res = {};
  let interval = [];
  let resString = "";

  res.years = Math.floor(rem / secondsInYear);
  rem -= res.years * secondsInYear;
  res.days = Math.floor(rem / secondsInDay);
  rem -= res.days * secondsInDay;
  res.hours = Math.floor(rem / secondsInHour);
  rem -= res.hours * secondsInHour;
  res.minutes = Math.floor(rem / secondsInMinute);
  rem -= res.minutes * secondsInMinute;
  res.seconds = rem;

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
        if (i < interval.length - 2) resString += ", ";
      } else {
        resString += " and " + interval[i];
      }
    }
  }
  return resString;
}
