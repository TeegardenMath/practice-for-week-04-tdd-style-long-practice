module.exports = function reverseString(string) {
  try {
    return string.split('').reverse().join('');
  } catch(error) {
    throw new TypeError("Input is not a string!");
  }
};