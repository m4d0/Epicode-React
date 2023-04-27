import { React, useEffect, useState } from 'react'
import { Alert, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const LamiaGet = () => {
  const [alert, setAlert] = useState(false)

  const token = useSelector((state) => {
    return state.auth.token
  })

  const getApiData = async () => {
    const response = await fetch('https://www.google.com', {
      headers: { Authentication: 'Bearer {token}' },
    })
      .then((response) => true)
      .catch(() => true)

    // update the state
    setAlert(response)
  }

  useEffect(() => {
    token && getApiData()
  }, [token])

  return (
    <>
      {alert && (
        <Alert key="info" variant="info">
          Ho fatto una chiamata fetch() con il token di autenticazione
        </Alert>
      )}
    </>
  )
}

export default LamiaGet
