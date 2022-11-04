'use strict'
describe('fizzBuzz', () => {
  const fizzBuzz = require('../exercises/1-fizzBuzz.js')
  it('exports a function', () => {
    expect(fizzBuzz).toBeInstanceOf(Function)
  })
  it('fizzBuzz - 0', () => {
    expect(fizzBuzz(0)).toStrictEqual([])
  })
  it('fizzBuzz - 1', () => {
    expect(fizzBuzz(1)).toStrictEqual(['fizzbuzz'])
  })
  it('fizzBuzz - 3', () => {
    expect(fizzBuzz(3)).toStrictEqual(['fizzbuzz', '', ''])
  })
  it('fizzBuzz - 5', () => {
    expect(fizzBuzz(5)).toStrictEqual(['fizzbuzz', '', '', 'fizz', ''])
  })
  it('fizzBuzz - 15', () => {
    expect(fizzBuzz(15)).toStrictEqual(['fizzbuzz', '', '', 'fizz', '', 'buzz', 'fizz', '', '', 'fizz', 'buzz', '', 'fizz', '', ''])
  })
  it('fizzBuzz - 100000', () => {
    expect(fizzBuzz(10000)).toStrictEqual(require('./1-fizzBuzz10000.json'))
  })
})
