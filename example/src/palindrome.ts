export const isPalindrome = (s) => {
 return s.split().filter(c => !c.match(/\s/)).join('') == s.split().filter(c => !c.match(/\s/)).reverse().join('')
}