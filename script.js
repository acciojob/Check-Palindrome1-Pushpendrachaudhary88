// complete the given function

function palindrome(str){
	// function isPalindrome(s) {
  // Remove non-alphanumeric characters
  str = str.replace(/[^a-zA-Z0-9]/g, '');

  // Convert to lowercase
  str = str.toLowerCase();

  // Check if the string is equal to its reverse
  return str === str.split('').reverse().join('');
}
module.exports = palindrome
