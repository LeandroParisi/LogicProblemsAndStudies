const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
}

// DepthFirst
// function HasPath(graph, src, dst) {
//   if (src === dst) return true

//   for (let neighbor of graph[src]) {
//     const hasPath = HasPath(graph, neighbor, dst)

//     if (hasPath) return true
//   }

//   return false
// }

// BreadthFirst
function HasPath(graph, src, dst) {
  const queue = [src]

  while (!!queue.length) {
    const current = queue.shift()
    const currentNeibors = graph[current]

    if (currentNeibors.includes(dst)) {
      return true
    }

    queue.push(...currentNeibors)
  }

  return false
}
const t = HasPath(graph, 'f', 'k')
console.log({ t })