'use strict'
/* # Exercice: Fizz Buzz
 *
 * ## Explanation:
 * You must code a function that given an integer n will output an array of length n such that:
 * - On indexes multiple of 3 it contains 'fizz'
 * - On indexes multiple of 5 it contains 'buzz'
 * - On indexes multiple of 3 and 5 it contains 'fizzbuzz'
 * - On every other index it contains ''
 *
 * ## Example:
 * ```
 * fizzBuzz(6) === ['fizzbuzz', '', '', 'fizz', '', 'buzz']
 * ```
 *
 * ## Expected Time
 * You should spend around 5 minutes on this exercice
 *
 * ## Further Notice
 * You have more examples in <root>/validations/1-fizzBuzz.validation.js
 */

function fizzBuzz(n) {
  const response = []

  for (let i = 0; i < n; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      response.push('fizzbuzz')
    } else if (i % 5 === 0) {
      response.push('buzz')
    } else if (i % 3 === 0) {
      response.push('fizz')
    } else {
      response.push("")
    }
  }

  return response
}


module.exports = fizzBuzz
