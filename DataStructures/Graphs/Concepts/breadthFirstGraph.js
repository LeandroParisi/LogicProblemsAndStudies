// Queue behaviour

const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
}

function BreadthFirstApproach(graph, source) {
  const queue = [source]

  while (!!queue.length) {
    const current = queue.shift()

    console.log(current)

    const neighbors = graph[current]

    queue.push(...neighbors)
  }
}

BreadthFirstApproach(graph, 'a')