export default class ApplicationError extends Error {
  innerError? : Error | undefined

  constructor(message : string, innerError? : Error) {
    super(message)
    this.innerError = innerError
  }
}
