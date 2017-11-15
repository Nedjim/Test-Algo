const palindrome = (word) => word.split('').reverse().join('') == word ? 'palindrome' : 'not palindrome';

module.exports = palindrome;