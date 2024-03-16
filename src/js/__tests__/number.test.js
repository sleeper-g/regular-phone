import convertN from './../number.js'

test('phone 1', () => {
  const phone = '8 (927) 000-00-00';
  expect(convertN()).toBe('+79270000000')
})
test('phone 2', () => {
  const phone = '+7 960 000 00 00';
  expect(convertN()).toBe('+79600000000')
})
test('phone 3', () => {
  const phone = '+86 000 000 0000';
  expect(convertN()).toBe('+860000000000')
})
