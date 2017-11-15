const palindrome = require('./palindrome');

test('Palindrome: rotor', () => {
    expect(palindrome('rotor')).toBe('palindrome')
})

test('Not Palindrome: zauguidou', () => {
    expect(palindrome('zauguidou')).toBe('not palindrome')
})