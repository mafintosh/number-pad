#!/usr/bin/env node

var numberPad = require('number-pad')

if (!process.argv[2]) {
  console.error('Usage: number-pad string')
  process.exit(1)
}

console.log(numberPad(process.argv[2]))
