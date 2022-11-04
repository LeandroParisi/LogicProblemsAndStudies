const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
]

const generateAdjacencyListFromUndirectedGraph = (edges) => {
  const adjancencyList = {}

  edges.forEach(edge => {
    const [nodeOne, nodeTwo] = edge

    const hasNodeOne = adjancencyList[nodeOne]
    const hasNodeTwo = adjancencyList[nodeTwo]

    tryAddNode(hasNodeOne, nodeOne, nodeTwo)
    tryAddNode(hasNodeTwo, nodeTwo, nodeOne)
  })

  function tryAddNode(hasNode, node, neigbor) {
    if (hasNode) {
      const currentNeigbors = adjancencyList[node]

      if (!currentNeigbors.includes(neigbor)) {
        adjancencyList[node].push(neigbor)
      }
    } else {
      adjancencyList[node] = [neigbor]
    }
  }

  return adjancencyList
}

function hasPath(edges, src, dst) {
  const adjancencyList = generateAdjacencyListFromUndirectedGraph(edges)

  const alreadyVisited = new Set([])

  const stack = [src]

  while (!!stack.length) {
    const current = stack.pop()
    if (current === dst) {
      return true
    }

    alreadyVisited.add(current)

    const currentNeibors = adjancencyList[current]

    for (let neigbor of currentNeibors) {
      if (alreadyVisited.has(neigbor)) {

      } else {
        stack.push(neigbor)
      }
    }
  }

  return false
}

const result = hasPath(edges, 'j', 'm')
console.log({ result })