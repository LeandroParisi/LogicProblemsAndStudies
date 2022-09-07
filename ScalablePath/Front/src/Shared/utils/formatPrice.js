const formatPrice = (price, decimal = false) => {
  if (decimal) return `R$ ${Number(price).toFixed(2)}`
  return `R$ ${Number(price)}`
}

export default formatPrice
