import Loader from 'assets/Loaders/Loader'
import { useEffect, useState } from 'react'
import { getImage } from '../../Assets/Loaders/loaderDictionary'

const useLoader = (image) => {
  const [display, setDisplay] = useState(true)

  const { src, timer } = getImage(image)

  useEffect(() => {
    setTimeout(() => {
      setDisplay(false)
    }, timer)
  }, [])

  return (
    display && <Loader src={src} />
  )
}

export default useLoader
