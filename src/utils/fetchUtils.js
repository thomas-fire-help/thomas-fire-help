const fetchAuthToken = () => {
  const authPayload = JSON.parse(localStorage.getItem('auth'))
  if (authPayload) {
    return authPayload.accessToken
  }
  return ''
}

export const fetchConfig = () => {
  return {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `${fetchAuthToken()}`
  };
};

export const handleErrors = (response) => {
  if (response.ok) {
    return response.json()
  } else {
    throw response;
  }
};
