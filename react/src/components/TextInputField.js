import React from 'react'

const TextInputField = props => {
  return(
    <label>{props.label}
      <input
        type='text'
        value={props.value}
        name={props.name}
        onChange={props.handleChange}
      />
    </label>
  )
}


export default TextInputField
