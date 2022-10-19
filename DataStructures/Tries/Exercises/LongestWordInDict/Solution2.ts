
class TNode {
  key : string
  layer : number
  // children : Record<string, Node[]>
  isTerminal : boolean

  /**
   *
   */
  constructor( 
    key : string,
    layer : number,
    // children : Record<string, Node[]>,
    isTerminal : boolean = false
    ) {
      this.key = key
      this.layer = layer
      // this.children = children
      this.isTerminal = isTerminal
  }
}

function longestWord2(words : string[]) {
  const orderedWords = words.sort((a, b) => a.length - b.length)
  const nodes : Record<string, TNode> = {}

  for (let word of orderedWords) {
    console.log({word})
    extractNodes(word)
  }

  function extractNodes(word : string) {
    for (let i = 0; i < word.length; i += 1) {
      const currentLayer = i + 1
      const char = word[i]
      console.log({char})
      const identifier = `${currentLayer}${char}`
      console.log({identifier})
      const node = new TNode(char, currentLayer, false)

      const previousIdentifier = `${currentLayer - 1}${word[i - 1]}`
      console.log({previousIdentifier})

      console.log({
        previous: !!nodes[identifier]
      })
      if (char === word) {
        node.isTerminal = true
        nodes[identifier] = node
        continue
      } else if (i === word.length - 1) {
        node.isTerminal = true
        nodes[identifier] = node
        continue
      } else if (nodes[previousIdentifier] && !!!nodes[identifier] && node.isTerminal) {
        nodes[identifier] = node
        continue
      } else if (!!nodes[identifier]) {
        continue
      } else {
        return 
      }
    }
  }

  console.log({nodes})

  // const validNodes = Object.entries(nodes).filter(([_, n]) => n.isTerminal)
  // console.log({validNodes})



  function findLargest(
    currentLayer : number,
    nodes : TNode[],
    biggestSoFar : string,
    currentNode? : TNode
  ) {
    if (!!currentNode?.isTerminal) {
      return
    }

    const nextNodes = nodes.find(n => n.layer === currentLayer)



  }

  // const trie = createMapForTrie(words)
}

longestWord2(['a', 'banana', 'zas', 'app', 'ap', 'appl', 'apply', 'apple'])