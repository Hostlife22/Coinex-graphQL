const COINCAP_API_URL = 'https://api.coincap.io/v2';

const buildUrl = (path, args = {}) => {
  const params = Object.keys(args)
    .filter((key) => args[key])
    .map((key) => `${key}=${args[key]}`)
    .join('&');

  let url = `${COINCAP_API_URL}${path}`;
  if (params) url += `?${params}`;

  return url;
};

export default buildUrl;
