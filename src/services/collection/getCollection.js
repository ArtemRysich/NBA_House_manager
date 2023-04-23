async function getCollection() {
    const token = localStorage.getItem('Token');
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const resp = await fetch(
      'https://nba-house-manager.herokuapp.com/objrent/all/',
      options
    );
    if (!resp.ok) {
      throw new Error('Invalid password');
    }

    return resp.json();
  }

  export { getCollection };