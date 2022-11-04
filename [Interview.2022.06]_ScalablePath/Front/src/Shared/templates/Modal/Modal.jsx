import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { getIcon } from 'assets/icons/iconsLib'
import Icon from 'assets/icons/Icon'
import Overlay from 'shared/templates/Overlay/Overlay'
import { Button } from 'adminDashboard/components'
import styles from './Modal.module.scss'

const Modal = ({
  children, isOpened, close, className,
}) => (
  isOpened && (
  <div className={classNames(styles.modalContainer, className)}>
    <Overlay isOpened close={close} />

    <div className={styles.subContainer}>
      <Icon
        icon={getIcon('CLOSE')}
        type="default"
        size="20px"
        onClick={close}
        className={styles.closeButton}
      />
      {children}

    </div>
  </div>
  )
)

Modal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
  isOpened: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
}

Modal.defaultProps = {
  className: '',
}

export default Modal
