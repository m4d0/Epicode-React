import React, { useEffect } from 'react'
import { useState } from 'react'

// FUNCTIONAL COMPONENT
const Clock4 = (props) => {
  const [stato, setStato] = useState(0) // stato per leggere  |   setStato() per scrivere
  flag
  useEffect( {

  }, [flag])  

  return <div onClick={ () => flag = true}></div>
}
export default Clock4

// CLASS COMPONENT
class Clock4Class extends React.Component {
  constructor(props) {
    super(props)
    this.state.stato = 0 //  this.state.stato per leggere |   this.setState({stato: 5}) per scrivere
  }

  componentDidUpdate() {

  }

  mioclick() {
    this.forceUpdate()
  }

  render() {
    return <div onClick={()=>mioclick()}>   </div>
  }
}
