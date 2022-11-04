import mainLoader from './images/main_loader.gif'
import loading from './images/loader_1.gif'

const loaderImages = {
  mainLoader: {
    src: mainLoader,
    timer: 1600,
  },
  loading: {
    src: loading,
    bgColor: 'transparent',
  },
}

export const getImage = (image) => loaderImages[image]

export default loaderImages
