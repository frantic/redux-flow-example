function callAPI(endpoint, params) {
  // Just for the demo, normally we'd use something like `fetch`
  // to talk to our servers
  return new Promise(resolve => {
    setTimeout(() => resolve({success: true}), 1000)
  });
}



export async function logIn(login, pass) {
  const response = await callAPI('/login', login, pass);
  if (!response.success) {
    throw new Error('Login failed');
  }

  return {
    type: 'LOGGED_IN',
    userName: login
  };
}

export function logOut() {
  return { type: 'LOGGED_OUT' };
}
