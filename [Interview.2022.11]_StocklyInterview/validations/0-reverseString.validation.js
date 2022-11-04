'use strict'
describe('reverseString', () => {
	const reverseString = require('../exercises/0-reverseString.js')
	it('exports a function', () => {
		expect(reverseString).toBeInstanceOf(Function)
	})
	it('reverse a string - 0', () => {
		expect(reverseString('str')).toStrictEqual('rts')
	})
	it('reverse a string - 1', () => {
		expect(reverseString('strWithNumber0')).toStrictEqual('0rebmuNhtiWrts')
	})
	it('reverse a string - 2', () => {
		expect(reverseString('a')).toStrictEqual('a')
	})
	it('reverse a string - 3', () => {
		expect(reverseString(require('./0-reverseStringLongString.json')))
			.toStrictEqual(require('./0-reverseStringReversedLongString.json'))
	})
})
