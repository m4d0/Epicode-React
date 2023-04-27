import { React } from 'react'
import { useSelector } from 'react-redux'

const Welcome = {
  it: 'Benvenuto',
  en: 'Welcome',
}

const Profile = () => {
  const authState = useSelector((state) => {
    return state.auth
  })
  const language = useSelector((state) => {
    return state.language.language
  })
  return (
    <div>
      {Welcome[language]} - {authState.isAuth ? authState.user.email : ''}
    </div>
  )
}

export default Profile
