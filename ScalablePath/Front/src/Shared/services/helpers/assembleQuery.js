const assembleQuery = (queryObject) => {
  let query = '?'

  const queryKeys = Object.keys(queryObject)
  const queryValues = Object.values(queryObject)

  queryKeys.forEach((key, index) => {
    const value = queryValues[index]
    if (index === 0) {
      query += `${key}=${value}`
    } else {
      query += `&${key}=${value}`
    }
  })

  return query
}

export default assembleQuery
