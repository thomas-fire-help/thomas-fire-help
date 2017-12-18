const fetchAuthToken = () => {
  const authPayload = JSON.parse(localStorage.getItem('auth'))
  return authPayload.accessToken
}

export const fetchConfig = () => {
  return {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${fetchAuthToken()}`
  };
};

export const handleErrors = (response) => {
  if (response.ok) {
    return response.json()
  } else {
    throw response;
  }
};
