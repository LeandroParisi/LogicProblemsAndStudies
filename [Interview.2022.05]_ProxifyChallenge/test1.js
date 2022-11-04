function solution2(s) {
  let counter = 0

  const array = [...s]

  const numberOfAs = array.filter(x => x === 'a').length
  const numberOfBs = array.filter(x => x === 'b').length

  if (numberOfAs === array.length) {
    return true
  } else if (numberOfBs === array.length) {
    return true
  }

  if (array[0] !== "a" && array.filter(x => x === "a").length > 0) {
    return false
  }

  for (const letter of array) {
    if (letter !== array[0]) {
      counter = 1
    }
    if (counter === 1 && letter === array[0]) {
      return false
    }
  }

  return true
}

function solution(S) {
  let word = [...S]

  const onlyA = word.filter(x => x === 'a').length === word.length
  const onlyB = word.filter(x => x === 'b').length === word.length

  if (onlyA || onlyB) {
    return true
  }

  while (true || word.length === 0) {
    let firstA = word.indexOf('a')
    let firstB = word.indexOf('b')

    if (firstA === -1 && firstB >= 0) {
      return true
    } else if (firstA < firstB) {
      word.splice(firstA, 1)
    } else if (firstA > firstB) {
      return false
    }
  }
}

console.log(solution2('aabbb'))
console.log(solution2('ba'))
console.log(solution2('aaa'))
console.log(solution2('b'))
console.log(solution2('abba'))

// console.log(solution('aabbb'))
// console.log(solution('ba'))
// console.log(solution('aaa'))
// console.log(solution('b'))
// console.log(solution('abba'))