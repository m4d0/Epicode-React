import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Blogs = () => {
  const navigate = useNavigate()

  return (
    <div>
      {' '}
      Blogs{' '}
      <div>
        <Button onClick={() => navigate('/contact')}> Goto Contact </Button>
      </div>
    </div>
  )
}

export default Blogs
