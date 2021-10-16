function updateLight(current) {
  const trafficLights = ["green", "yellow", "red"];
  const currentSignal = trafficLights.indexOf(current);
  let nextSignal =
    trafficLights[(trafficLights.indexOf(current) + 1) % trafficLights.length];
  return nextSignal;
}
