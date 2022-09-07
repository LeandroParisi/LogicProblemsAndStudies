import React from 'react'
import PropTypes from 'prop-types'
import Loader from 'react-loader-spinner'
import { DARK } from 'shared/libs/colors'
import styles from './ReactLoader.module.scss'

const ReactLoader = ({ size }) => (
  <div className={styles.loaderContainer}>
    <Loader
      type="Oval"
      color={DARK}
      height={size}
      width={size}
    />

  </div>
)

ReactLoader.propTypes = {
  size: PropTypes.number,
}

ReactLoader.defaultProps = {
  size: 75,
}
export default ReactLoader
