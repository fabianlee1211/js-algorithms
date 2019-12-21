/*
  Vowel Recognition Time Complexity Problem
  https://www.hackerearth.com/practice/basic-programming/complexity-analysis/time-and-space-complexity/practice-problems/algorithm/vowel-game-f1a1047c/description/
  Only works on short strings
*/

const pattern = /[aeiouAEIOU]/g

function getSumOfVowels(str) {
  let entireString = ''

  for (let j = 0; j < str.length; j++) {
    for (let i = 0; i < str.length - j; i++) {
      entireString += str.substring(i, i + j + 1)
    }
  }
  return entireString.match(pattern).length
}

function main(input) {
  const info = input.split('\n')
  for (let index = 1; index < info.length; index++) {
    if (info[index].match(pattern) === null) {
      process.stdout.write(`${0}\n`)
      continue
    }
    process.stdout.write(`${getSumOfVowels(info[index])}\n`)
  }
}
