import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './Loader.module.scss'

function Loader({
  src, backgroundColor, message, centered,
}) {
  return (
    <div className={classNames(
      styles.loader,
      { [styles[backgroundColor]]: backgroundColor },
    )}
    >
      <img src={src} alt="Loading" className={classNames({ [styles.centered]: centered })} />
      {message && <h1 className={styles.loaderMessage}>{ message }</h1>}
    </div>
  )
}

Loader.propTypes = {
  src: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  message: PropTypes.string,
  centered: PropTypes.bool,
}

Loader.defaultProps = {
  backgroundColor: '',
  message: '',
  centered: false,
}

export default Loader
