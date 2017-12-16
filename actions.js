// @flow

export type Action =
    { type: 'LOGGED_IN', userName: string}
  | { type: 'LOGGED_OUT' }
  ;

function callAPI(endpoint, params) {
  // Just for the demo, normally we'd use something like `fetch`
  // to talk to our servers
  return new Promise(resolve => {
    setTimeout(() => resolve({success: true}), 1000)
  });
}

export async function logIn(login: string, pass: string): Promise<Action> {
  const response = await callAPI('/login', {login, pass});
  if (!response.success) {
    throw new Error('Login failed');
  }

  return {
    type: 'LOGGED_IN',
    userName: login
  };
}

export function logOut(): Action {
  return { type: 'LOGGED_OUT' };
}
