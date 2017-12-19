export const getHost = () => {
  if (process.env.NODE_ENV === 'development') {
    return 'https://firehelp-api-staging.herokuapp.com'
  }
  if (process.env.NODE_ENV === 'staging') {
    return 'https://firehelp-api-staging.herokuapp.com'
  }
  if (process.env.NODE_ENV === 'production') {
    return 'https://firehelp-api.herokuapp.com'
  }
}
