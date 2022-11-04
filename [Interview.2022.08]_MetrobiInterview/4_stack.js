const parity = {
  "(": ")",
  "{": "}",
  "[": "]"
}

const openings = '([{'
const closings = ")]}"

const isOpening = (v) => openings.indexOf(v) >= 0
const isClosing = (v) => closings.indexOf(v) >= 0

function solution3(input) {
  const stack = []
  const inputArray = [...input]

  // const ignore = "'"
  // let ignoreOpened = 0

  while (!!inputArray.length) {
    const current = inputArray.shift()

    // if (current === 1) {
    //   continue
    // }
    // if (current === ignore) {
    //   ignoreOpened += 1

    //   if (ignoreOpened === 2) {
    //     ignoreOpened = 0
    //   }
    // }
    if (!stack.length || isOpening(current)) {
      stack.push(current)
      continue
    } else if (isClosing(current)) {
      const previous = stack.pop()

      if (parity[previous] !== current) {
        return false
      }
    }
  }

  if (!stack.length) {
    return true
  } else {
    return false
  }
}


console.log(solution3("]{[]}"))
// console.log(solution3("{(])}"))
// console.log(solution3("{([)]}"))
// console.log(solution3("{[()]}'[['{}()[()]"))
// console.log(solution3("{[()]}{}()[()}]"))



