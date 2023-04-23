async function loginCall(userData) {
  const options = {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const resp = await fetch(
    'https://nba-house-manager.herokuapp.com/login',
    options
  );
  if (!resp.ok) {
    throw new Error('Invalid password');
  }

  return resp.json();
}

export { loginCall };
