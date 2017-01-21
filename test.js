var numberPad = require('./')
var tape = require('tape')

tape('works', function (t) {
  t.same(numberPad('data'), 3282)
  t.same(numberPad('hyper'), 49737)
  t.end()
})
