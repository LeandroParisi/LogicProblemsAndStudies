import emailValidator from 'email-validator'

const validateEmail = (email) => emailValidator.validate(email)

export default validateEmail
