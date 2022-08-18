// Stack behaviour

const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
}

function DepthFirstApproach(graph, source) {
  const stack = [source]

  while (!!stack.length) {
    const current = stack.pop()
    console.log(current)
    const neiboughrs = graph[current]
    stack.push(...neiboughrs)
  }
}

function RecursiveDepthFirstApproach(graph, source) {
  console.log(source)

  for (let neighbor of graph[source]) {
    RecursiveDepthFirstApproach(graph, neighbor)
  }
}

RecursiveDepthFirstApproach(graph, 'a')