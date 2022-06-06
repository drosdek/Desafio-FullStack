export default () => {
  const url = window.location.href;
  let start = url.indexOf("://");
  if (start > 0) {
    start += 3;
  }
  const domain = url.substring(start);
  let end = domain.indexOf(":");
  if (end < 0) {
    end = domain.indexOf("/");
  }
  return domain.substring(0, end);
};
