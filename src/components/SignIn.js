import { React } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '../states/AuthSlice'
import { Button } from 'react-bootstrap'

const user = {
  username: '',
  password: '',
}

const mockData = {
  userProfile: {
    email: 'm.donati@google.com',
    name: 'Marco',
    role: ['Admin', 'Editor'],
    info: {},
  },
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
}

const SignIn = () => {
  const dispatch = useDispatch()

  const do_login = () => {
    const response = fetch('www.google.com')
      .then((response) => dispatch(login(mockData)))
      .catch(() => {
        dispatch(login(mockData))
      })
  }

  return (
    <Button className="mx-3" onClick={() => do_login()}>
      SignIn
    </Button>
  )
}

export default SignIn
