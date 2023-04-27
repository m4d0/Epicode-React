import { React } from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const profile = useSelector((state) => state)
  return <div>{profile.isAuth ? profile.user.email : ''}</div>
}

export default Profile
