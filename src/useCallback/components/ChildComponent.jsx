import React from 'react'

const ChildComponent = ({increment}) => {
    console.log("Child component rendered")
  return (
    <div>
        <button onClick={increment}>Increment</button>
    </div>
  )
}

export default ChildComponent