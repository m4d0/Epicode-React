import { React } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '../states/AuthSlice'
import { Button } from 'react-bootstrap'

const user = {
  username: '',
  password: '',
}

const SignIn = () => {
  const dispatch = useDispatch()

  const do_login = () => {
    // username, password

    const response = {
      data: {
        userProfile: {
          email: 'm.donati@google.com',
          name: 'Marco',
          role: ['Admin', 'Editor'],
          info: {},
        },
        token: '',
      },
    }

    dispatch(login(response.data))
  }

  return <Button onClick={() => do_login()}>SignIn</Button>
}

export default SignIn
