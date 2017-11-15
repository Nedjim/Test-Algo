const calculate = require('./calculate');

test('Addition: 1 + 2 to = 3', () => {
    expect(calculate(1, 2, '+')).toBe(3)
})

test('Soustraction: 3 - 2 = 1', () => {
    expect(calculate(3, 2, '-')).toBe(1)
})

test('Multiplication: 3 x 3 = 9', () => {
    expect(calculate(3,3,'*')).toBe(9)
})

test('Division : 6 / 2 = 3', () => {
    expect(calculate(6, 2 , '/')).toBe(3)
})

test('Puissance: 3 ^ 3 = 27', () => {
    expect(calculate(3, 3, '^')).toBe(27)
})