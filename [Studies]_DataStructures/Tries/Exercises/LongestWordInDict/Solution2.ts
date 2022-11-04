// https://leetcode.com/problems/longest-word-in-dictionary/

class TNode {
  key : string
  layer : number
  previousNode : string | undefined
  pathLength : number
  isLastLetter : boolean
  // children : Record<string, Node[]>
  isTerminal : boolean
  nextNodes : string[] | undefined

  /**
   *
   */
  constructor( 
    key : string,
    layer : number,
    previousNode? : string,
    // children : Record<string, Node[]>,
    isTerminal : boolean = false
    ) {
      this.key = key
      this.layer = layer
      this.previousNode = previousNode
      this.pathLength = 1
      this.isLastLetter = false
      // this.children = children
      this.isTerminal = isTerminal
  }
}

// function longestWord2(words : string[]) {
//   const orderedWords = words.sort((a, b) => a.length - b.length)
//   const nodes : Record<string, TNode> = {}

//   let maxLengthWordSoFar = 0

//   for (let word of orderedWords) {
//     console.log({word})
//     extractNodes(word)
//   }

//   function extractNodes(word : string) {
//     for (let i = 0; i < word.length; i += 1) {
//       const currentLayer = i + 1
//       const char = word[i]
//       const identifier = `${currentLayer}${char}`
//       const previousIdentifier = currentLayer !== 1 ? `${currentLayer - 1}${word[i - 1]}` : undefined
//       const node = new TNode(char, currentLayer, previousIdentifier, false)

//       if (char === word) {
//         node.isTerminal = true
//         nodes[identifier] = node
//         continue
//       } else if (i === word.length - 1 && !!nodes[previousIdentifier!]) {
//         node.isTerminal = true
//         node.isLastLetter = true
//         maxLengthWordSoFar = word.length
//         node.pathLength = maxLengthWordSoFar
//         nodes[identifier] = node
//         continue
//       } else if (!!nodes[previousIdentifier!] && !!!nodes[identifier] && node.isTerminal) {
//         nodes[identifier] = node
//         continue
//       } else if (!!nodes[identifier]) {
//         continue
//       } else {
//         return 
//       }
//     }
//   }
//   console.log({nodes})
//   let nodesArray = Object.entries(nodes)
//   nodesArray = nodesArray.map(([identifier, node]) => {

//     node.nextNodes = nodesArray.filter(([_, n]) => n.) 

//     return [
//       identifier,
//       node.

//     ]
// })

//   nodesArray.forEach(([identifier, node]) => {

//   })

//   function dfs(longest : string, originalTrie : Record<string, TNode>, ) {

//   }

//   function withoutDfs() {
//     // const nodeEntries = Object.entries(nodes)
//     // const firstLayer = Math.min(...Object.values(nodes).map(n => n.layer))
//     // const lastLayer = Math.max(...Object.values(nodes).map(n => n.layer))
  
//     // const path = new Set()

//     // const biggestString = ""
  
//     // const range = new Array(lastLayer)
  
//     // for (let i = 1; i <= range.length; i =+ 1) {
//     //   const currentNodes = nodeEntries.filter(([_, n]) => n.layer === i)
//     // }
  
//     // console.log({range})
//     // console.log({nodes})
//     // console.log({firstLayer})
//     // console.log({lastLayer})
//   }

// }

// function longestWord2(words : string[]) {
//   const orderedWords = words.sort((a, b) => a.length - b.length)

//   for (let word of orderedWords) {
//     console.log({word})
//     extractNodes(word)
//   }

//   function extractNodes(word : string) {
//     for (let i = 0; i < word.length; i += 1) {
//       const currentLayer = i + 1
//       const char = word[i]
//       const identifier = `${currentLayer}${char}`
//       const previousIdentifier = currentLayer !== 1 ? `${currentLayer - 1}${word[i - 1]}` : undefined
//       const node = new TNode(char, currentLayer, previousIdentifier, false)
//       console.log(node)
//     }
//   }
// }

longestWord2(['a', 'banana', 'zas', 'app', 'ap', 'appl', 'ape', 'apply', 'apple'])