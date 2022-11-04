const carrotTypes = [{ kg: 5, price: 100 }, { kg: 7, price: 150 }, { kg: 3, price: 70 }]
const capacity = 36

function getMaxValue(carrotTypes, capacity) {
  const prices = carrotTypes.map(x => x.price)
  const weights = carrotTypes.map(x => x.kg)
  const maxIndex = carrotTypes.length - 1

  // Image 1 inside 7_carrots_explained
  const matrix = new Array(capacity + 1).fill(0)

  for (let i = 0; i <= capacity; i++) {
    for (let j = 0; j <= maxIndex; j++) {
      if (weights[j] <= i) {
        // Image 2 inside 7_carrots_explained
        matrix[i] = Math.max(matrix[i], matrix[i - weights[j]] + prices[j])
        console.log(matrix)
      }
    }
  }

  const result = matrix[capacity]
  console.log({ result })
  return result
}

getMaxValue(carrotTypes, capacity)