import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import routes from 'shared/libs/routes/routes'
import { Route, useHistory } from 'react-router-dom'
import userAuth from 'shared/services/users/userAuth'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const history = useHistory()

  useEffect(() => {
    const authenticate = async () => {
      const response = await userAuth()
      if (response?.status !== 200) {
        history.push(routes.login)
      }
    }
    authenticate()
  }, [history.location.pathname])

  return (
    <>
      <Route
        {...rest}
        render={
      (props) => <Component {...rest} {...props} />
    }
      />
    </>
  )
}

ProtectedRoute.propTypes = {
  component: PropTypes.element.isRequired,
}

export default ProtectedRoute
