function updateLight(current) {
  const trafficLights = ["green", "yellow", "red"];
  const currentSignal = trafficLights.indexOf(current);
  let nextSignal;
  if (currentSignal < trafficLights.length - 1) {
    nextSignal = trafficLights[currentSignal + 1];
  } else {
    nextSignal = trafficLights[0];
  }
  return nextSignal;
}
