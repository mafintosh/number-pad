var map = [2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9]
var a = 'a'.charCodeAt(0)

module.exports = numberPad

function numberPad (str) {
  str = str.toLowerCase()
  var result = 0
  for (var i = 0; i < str.length; i++) {
    var n = str.charCodeAt(i) - a
    if (n >= map.length || n < 0) throw new Error('String must only contain a-z')
    result = result * 10 + map[n]
  }
  return result
}
