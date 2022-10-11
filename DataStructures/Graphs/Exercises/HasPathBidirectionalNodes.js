function createGraphFromEdges(edges, isBidirectional = false) {
  const graph = {}

  function generateGraph(edges, reverse = false) {
    const initial = reverse ? 1 : 0
    const final = reverse ? 0 : 1

    edges.forEach(edge => {
      let node = graph[edge[initial]]
      if (!node) {
        graph[edge[initial]] = [edge[final]]
      } else {
        graph[edge[initial]].push(edge[final])
      }
    })
  }

  generateGraph(edges)

  if (isBidirectional) {
    generateGraph(edges, isBidirectional)
  }

  return graph
}

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  if (n === 1) return true

  const graph = createGraphFromEdges(edges, true)

  const visited = new Set()

  console.log({ graph })
  function depthFirst(graph, src, dst) {
    const stack = [src]

    while (!!stack.length) {
      const current = stack.pop()

      if (current === dst) {
        return true
      }

      if (!visited.has(current)) {
        visited.add(current)
      } else {
        continue
      }

      const neiboughrs = graph[current]

      stack.push(...neiboughrs)
    }
  }

  return depthFirst(graph, source, destination)
};

const n = 10,
  edges = [[4, 3], [1, 4], [4, 8], [1, 7], [6, 4], [4, 2], [7, 4], [4, 0], [0, 9], [5, 4]],
  source = 5,
  destination = 9

console.log(validPath(n, edges, source, destination))