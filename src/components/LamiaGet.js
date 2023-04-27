import { React } from 'react'
import { useSelector } from 'react-redux'

const LamiaGet = () => {
  const token = useSelector((state) => {
    return state.auth.token
  })

 
  return <div>{authState.isAuth ? authState.user.email : ''}</div>
}

export default LamiaGet
