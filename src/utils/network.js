export const getHost = () => {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3000'
  }
  if (process.env.NODE_ENV === 'staging') {
    return 'https://firehelp-api-staging.herokuapp.com'
  }
  if (process.env.NODE_ENV === 'production') {
    return 'https://firehelp-api.herokuapp.com'
  }
}
