async function addToCollection(data) {
  const token = localStorage.getItem('Token');
  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  const resp = await fetch(
    'https://nba-house-manager.herokuapp.com/objrent/create/',
    options
  );
  if (!resp.ok) {
    throw new Error('Invalid password');
  }
  console.log('resp', resp);
  return resp.json();
}

export { addToCollection };
