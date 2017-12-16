export const fetchConfig = () => {
  return {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };
};

export const handleErrors = (response) => {
  if (response.ok) {
    return response.json()
  } else {
    throw response;
  }
};
