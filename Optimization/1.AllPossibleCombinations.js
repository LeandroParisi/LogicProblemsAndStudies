let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// -----
// Original function
function cartesian_product(xs, ys) {
  var result = [];
  for (var i = 0; i < xs.length; i++) {
    for (var j = 0; j < ys.length; j++) {
      // transform [ [1, 2], 3 ] => [ 1, 2, 3 ] and append it to result []
      result.push([].concat.apply([], [xs[i], ys[j]]));
    }
  }
  return result;
}

function cartesian_power(xs, n) {
  var result = xs;
  for (var i = 1; i < n; i++) {
    result = cartesian_product(result, xs)
  }
  return result;
}

function unique_cartesian_power(xs, n) {
  let timer = 0
  const t = setInterval(() => {
    timer += 1
    console.log({ timer })
  }, 1000)

  var result = cartesian_power(xs, n);
  var unique_result = [];
  const set = new Set();

  result.forEach(function (value) {
    var representation = value.sort().join(' ');
    if (!set.has(representation)) {
      set.add(representation);
      unique_result.push(value);
    }

  });

  clearInterval(t)
  console.log({ timeSpent: timer, numberOfInputs: n })

  return unique_result;
}

unique_cartesian_power(input, input.length)

console.log('\n\n\n\n')


// -----
// New function


function getPossibleCombinations(currentBaseCombinationsSet, originalInput) {
  const result = []
  const currentBaseCombinations = [...currentBaseCombinationsSet]

  for (let i = 0; i < currentBaseCombinationsSet.size; i++) {
    for (let j = 0; j < originalInput.length; j++) {
      // transform [ [1, 2], 3 ] => [ 1, 2, 3 ] and append it to result []
      const newItem = [].concat.apply([], [currentBaseCombinations[i], originalInput[j]])
        .filter((current, index, self) => self.indexOf(current) === index)
        .sort()

      if (currentBaseCombinationsSet.has(newItem)) {

      } else {
        result.push(newItem)
      }

    }
  }

  return result
}

function createCombinations(arrayInput, numberOfItemsPerCombination) {
  let timer = 0
  const t = setInterval(() => { timer += 1 }, 1000)

  let result = new Set([...arrayInput])

  for (let i = 1; i < numberOfItemsPerCombination; i += 1) {
    const newResult = getPossibleCombinations(result, arrayInput)
    result = new Set([...newResult])
  }

  clearInterval(t)
  console.log({ timeSpent: timer, numberOfInputs: numberOfItemsPerCombination })

  return result
}

createCombinations(input, input.length)