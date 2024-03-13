import Cookie from 'js-cookie'
import {withRouter} from 'react-router-dom'

const LogoutButton = props => {
  const onClickLogoutButton = () => {
    Cookie.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <button type="button" onClick={onClickLogoutButton}>
      Logout
    </button>
  )
}
export default withRouter(LogoutButton)
