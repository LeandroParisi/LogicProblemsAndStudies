'use strict'
/* # Exercice: Camel To Kebab
 *
 * ## Explanation:
 * You must code a function that transforms a string from camelCase (see Further Notice) to
 * kebab-case (see Further Notice). This function must not break abreviations.
 *
 * ## Example:
 * ```
 * camelToKebab('CamelCaseString') === 'camel-case-string'
 * camelToKebab('CamelCaseStringWithABREV') === 'camel-case-string-with-abrev'
 * camelToKebab('CamelCaseStringWithABREVInCenter') === 'camel-case-string-with-abrev-in-center'
 * ```
 *
 * ## Expected Time
 * You should spend around 15 minutes on this exercice
 *
 * ## Further Notice
 * - You have more examples in <root>/validations/3-camelToKebab.validation.js
 * - See [camelCase](https://en.wikipedia.org/wiki/Camel_case)
 * - See [kebabCase](http://wiki.c2.com/?KebabCase)
 */

function camelToKebab(str) {
  // this solution was adapted from this stackOverflow thread: https://stackoverflow.com/questions/63116039/camelcase-to-kebab-case
  // I fully understand the code, I have changed the regex to match edge cases and I can explain the code 100%
  const response = str.replace(/[A-Z]+(?![a-z])|[A-Z]|[0-9]/g, ($, offset) => (offset ? "-" : "") + $.toLowerCase())

  return response
}


module.exports = camelToKebab
