const formatPercentage = (price, decimal = false) => {
  if (decimal) return `${Number(price).toFixed(2)}%`
  return `${Number(price)}%`
}

export default formatPercentage
