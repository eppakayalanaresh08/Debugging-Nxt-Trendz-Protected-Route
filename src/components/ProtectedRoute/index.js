import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = props => {
  const token = Cookies.get('jwt_token')

  if (token === undefined) {
    return <Redirect to="/login" />
  }

  return <Route {...props} />
  // FIX1: The spread operator should be used while sending the props
}

export default ProtectedRoute
