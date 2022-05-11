function domainName(url) {
  url = url.replace("www.", "");
  url = url.replace("http://", "");
  url = url.replace("https://", "");
  const domainEnd = url.indexOf(".");
  const domain = url.slice(0, domainEnd);
  return domain;
}
