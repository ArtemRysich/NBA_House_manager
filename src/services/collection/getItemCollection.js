async function getItmCollection(id) {
  const token = localStorage.getItem('Token');
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  const resp = await fetch(
    `https://nba-house-manager.herokuapp.com/objrent/${id}`,
    options
  );
  if (!resp.ok) {
    throw new Error('Invalid password');
  }

  return resp.json();
}

export { getItmCollection };
