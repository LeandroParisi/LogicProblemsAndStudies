function binarySearch(array : Array<number>, target : number) : boolean {
  let start = 0
  let end = array.length - 1

  while (start <= end) {
    const mid = Math.floor((start + end) / 2)

    if (array[mid] == target) {
      return true
    }

    if (target < array[mid]) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }

  return false
}

function convertToAscii(array : Array<unknown>) : [Record<number, any>, Array<number>]{
  const reference : Record<number, any> = {}
  const asciiArray : Array<number> = []

  for (const item of array) {
    const stringified = JSON.stringify(item)

    const ref = [...stringified].reduce((acc, x) => acc + x.charCodeAt(0), 0)

    reference[ref] = item

    asciiArray.push(ref)
  }

  return [reference, asciiArray]
}

function solution1(array : Array<unknown>) {
  const [refTable, ascciArray] = convertToAscii(array)

  let sorted = ascciArray.sort((a, b) => a - b)

  const duplicates = new Set<any>()

  while(!!sorted.length) {
    const item = sorted.shift() as unknown as number

    if (duplicates.has(item)) {
      continue
    }

    const isDuplicate = binarySearch(sorted, item)

    if (isDuplicate) {
      duplicates.add(item)
      sorted = sorted.filter(x => x !== item)
    }
  }

  const response = [...duplicates].map(x => refTable[x])
  return response
}

// solution1([6, 10, 1, 12, 'a', 10, 't', 'c'])
// solution1([6, 10, 1, 12, 'a',{1: 3, 'x': 123}, 't', 'c', {1: 3, 'x': 123}])
// solution1([6, 10, 1, 12, 'a', 't', 'c', [1, 2, 3, 4, 'a'], 't'])
// solution1([6, 10, 'a', 1, 12, 'a', 't', 'c', [1, 2, 3, 4, 'a'], 't'])
// solution1([6, 10, 1, 12, [1, 2, 3, 4, 'a'], 'a', 't', 'c', [1, 2, 3, 4, 'a'], 't'])

