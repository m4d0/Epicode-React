import React, { useEffect, useState } from "react";

const Clock = (props) => {

    // inizializzaione

    [date, setDate] = useState(new Date());
    [counter, setCounter] = useState(0);

    useEffect({
        this.timerID = setInterval(() => setDate(Date.now), 1000)
        return clearInterval(this.timerID)
    }, [user])

    return  (
        // return render()
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
        </div>
      );
}

export default Clock;