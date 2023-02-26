module.exports = function check(str, bracketsConfig) {
  // your solution
  let array = [];
  if (str.length % 2 != 0) {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (array[array.length - 1] == bracketsConfig[j][0] && str[i] == bracketsConfig[j][1]) {
        console.log(bracketsConfig[j][1]);
        array.pop();
      } else {
        if (str[i] == bracketsConfig[j][0]) {
          array.push(str[i]);
        }
      }
    }
  }
  return (array.length == 0) ? true : false;
}
