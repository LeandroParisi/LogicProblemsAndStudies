// Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1 and return them in any order.

// The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).

// Constraints:

// n == graph.length
// 2 <= n <= 15
// 0 <= graph[i][j] < n
// graph[i][j] != i (i.e., there will be no self-loops).
// All the elements of graph[i] are unique.
// The input graph is guaranteed to be a DAG.

// https://leetcode.com/problems/all-paths-from-source-to-target/discuss/986429/Python-Iterative-DFS-with-detailed-time-complexity-and-visuals


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

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const directionalGraph = {}

  graph.forEach((node, index) => {
    directionalGraph[index] = graph[index]
  })

  console.log({ directionalGraph })


  const lastNodeNumber = directionalGraph.length - 1

  const stack = [[0, [0]]]

  const response = []

  while (!!stack.length) {
    const [currentNode, path] = stack.pop()

    if (currentNode === lastNodeNumber) {
      response.push(path)
    }

    console.log({ currentNode, path })
    directionalGraph[currentNode].forEach(neibourgh => {
      stack.push(neibourgh, [...path, neibourgh])
    })
  }

  return response
};

console.log(allPathsSourceTarget([[1, 2], [3], [3], []]))
// Input: graph = [[1,2],[3],[3],[]]
// Output: [[0,1,3],[0,2,3]]
// Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.

console.log(allPathsSourceTarget([4, 3, 1], [3, 2, 4], [3], [4], []))

// Input: graph = [[4,3,1],[3,2,4],[3],[4],[]]
// Output: [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]