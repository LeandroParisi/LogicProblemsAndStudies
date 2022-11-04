
function solution2(array) {
  let repetitions = {}

  array.forEach(item => {
    const numberOfRepetitions = repetitions[item]

    if (numberOfRepetitions >= 2) {
      // continue
    }
    else if (!numberOfRepetitions) {
      repetitions[item] = 1
    } else if (numberOfRepetitions == 1) {
      repetitions[item] = 2
    }
  })

  const result = Object.entries(repetitions)
    .filter(([k, v]) => v >= 2)
    .map(([k, v]) => k)

  console.log(result)
  return result
}

solution2([6, 10, 1, 12, 'a', { 1: 3, 'x': 'te' }, 't', 'c', { 1: 3, 'x': 123 }])

// solution2([6, 10, 1, 12, 'a', 10, 12, 't', 'c'])
// solution2([6, 10, 12, 1, 12, 'c', 't', 'a', 't', 'c'])