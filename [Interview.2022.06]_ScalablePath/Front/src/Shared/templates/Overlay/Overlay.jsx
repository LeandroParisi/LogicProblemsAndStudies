import React from 'react'
import PropTypes from 'prop-types'
import styles from './Overlay.module.scss'

const Overlay = ({
  isOpened,
  close,
}) => (
  isOpened
  && (
  <div
    className={styles.overlay}
    onClick={() => close(false)}
  />
  )
)

Overlay.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
}

export default Overlay
