export const isValidEmail = (email) => (
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
);

export const isValidPassword = (password) => (
  password.length >= 8
);

export const isValidPhoneNumber = (phoneNumber) => (
  filterNumericCharacters(phoneNumber)
    ? phoneNumber.match(/\d/g).length >= 10
    : false
);

export const filterNumericCharacters = (string) => {
  return string
    ? string.match(/\d/g).slice(-10).join('')
    : null
};

export const hasSignUpErrors = (errors) => (
  Object.values(errors).some(error => Boolean(error.label))
);

export const hasEmptyFields = (...args) => (
  args.some(fieldValue => fieldValue === '')
);
