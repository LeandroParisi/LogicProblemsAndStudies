'use strict'
describe('DONT TRY', () => {
  it('seriously if you fail you\'ll be dropped', () => {
    expect(false).toStrictEqual(false)
  })
  it('this is a bad idea', () => {
    expect(String).toStrictEqual(String)
  })
  it('Well, the tests above where all trying to make me look bad, I have left a easter egg for you also, you can check it with npm run unhack', () => {
    expect(false).toStrictEqual(true)
  })
})
