function getSegmentsMin(x, space) {
  var i = 0
  var max = Number.MIN_SAFE_INTEGER

  while (i + x <= space.length) {
    const min = space.slice(i, i + x).reduce((acc, a) => Math.max(Math.min(...a), acc), [])

    if (min > max) {
      max = min
    }

    i += 1
  }

  return max
}

function segment(x, space) {
  var i = 0
  var max = Number.MIN_SAFE_INTEGER

  while (i + x <= space.length) {
    const segment = space.slice(i, i + x)

    const min = segment.sort((a, b) => a - b)[0]

    if (min > max) {
      max = min
    }

    i += 1
  }

  return max
}

function segment(x, space) {
  var segments = []

  for (let i = 0; i + x <= space.length; i++) {
    segments.push(space.slice(i, i + x).sort((a, b) => a - b)[0])
  }

  return Math.max(...segments)
}

console.log(segment(2, [8, 2, 4, 6]))
console.log(segment(1, [1, 2, 3, 1, 2]))
console.log(segment(2, [1, 1, 1]))
console.log(segment(3, [2, 5, 4, 6, 8]))