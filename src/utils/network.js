export const getHost = () => {
  if (process.env.REACT_APP_API_HOST === 'production') {
    return 'https://firehelp-api.herokuapp.com'
  }
  return 'https://firehelp-api-staging.herokuapp.com'
}
