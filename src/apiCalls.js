export const fetchedStrainsData = (key) => {
  const url = `https://strainapi.evanbusse.com/${key}/strains/search/all`;
  return fetch(url)
  .then(response => response.json())
  .catch(err => console.log(err))
};