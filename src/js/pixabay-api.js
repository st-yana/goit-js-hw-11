export const fetchImages = (searchValue) => {
  const params = new URLSearchParams({
    key: '46368026-ceb8dba76cba5a0f9c417db4a',
    q: searchValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true'
  });
  return fetch(`https://pixabay.com/api/?${params.toString()}`, {})
    .then(response => response.json());
}