'use strict'
/* # Exercice: Reverse String
 *
 * ## Explanation:
 * You must code a function that reverses a string.
 *
 * ## Example:
 * ```
 * reverseString('my-string') === 'gnirts-ym'
 * ```
 *
 * ## Expected Time
 * You should spend around 3 minutes on this exercice
 *
 * ## Further Notice
 * You have more examples in <root>/validations/0-reverseString.validation.js
 */

function reverseString(str) {
  let newStr = ""

  for (let i = str.length - 1; i >= 0; i -= 1) {
    newStr += str[i]
  }

  return newStr
}

module.exports = reverseString
