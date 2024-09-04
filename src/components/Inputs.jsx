import React from 'react'

const Inputs = (props) => {
  return (
    <div>
        <input type={props.name} placeholder={props.placeholder} />
    </div>
  )
}

export default Inputs