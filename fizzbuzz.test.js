const fizzbuzz = require('./fizzbuzz');

test('Fizz', () => {
    expect(fizzbuzz('bou')).toBe('Fizz')
})

test('Buzz', () => {
    expect(fizzbuzz('bouyakaaaa')).toBe('Buzz')
})

test('FizzBuzz', () => {
    expect(fizzbuzz('bouyakaaaabouka')).toBe('FizzBuzz')
})

test('Oups !', () => {
    expect(fizzbuzz('yo')).toBe('Oups !')
})
