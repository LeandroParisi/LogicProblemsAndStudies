const edges = [[0, 1], [0, 2], [3, 5], [5, 4], [4, 3]]

function createGraphFromEdges(edges, isBidirectional = false) {
  const graph = {}

  function generateGraph(edges, reverse = false) {
    const initial = reverse ? 1 : 0
    const final = reverse ? 0 : 1

    edges.forEach(edge => {
      let node = graph[edge[initial]]
      console.log({ node })
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

console.log(createGraphFromEdges(edges, true))