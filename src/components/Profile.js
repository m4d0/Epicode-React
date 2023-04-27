import { React } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'

const profile = useSelector((state) => state.auth)

const Profile = () => {
  return <div>{profile.isAuth ? profile.user.email : ''}</div>
}

export default Profile
