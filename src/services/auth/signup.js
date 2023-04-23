async function signUpCall(userData) {
  const options = {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const resp = await fetch(
    'https://nba-house-manager.herokuapp.com/users/create/',
    options
  );
  if (!resp.ok) {
    throw new Error('Invalid password');
  }

  return resp.json();
}

export { signUpCall };
