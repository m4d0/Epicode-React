import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Prodotto = (props) => {
  // inizializzaione

  // [date, setDate] = useState(new Date());
  // [counter, setCounter] = useState(0);

  // useEffect({
  //     this.timerID = setInterval(() => setDate(Date.now), 1000)
  //     return clearInterval(this.timerID)
  // }, [user])

  let { prodId } = useParams()
  return (
    <div>
      {prodId && <h1>Hello, world! id prodotto {prodId} </h1>}
      {prodId === null && <h1>Lista prodotti </h1>}
      {/* <h2>It is {this.props.date.toLocaleTimeString()}.</h2> */}
    </div>
  )
}

export default Prodotto
