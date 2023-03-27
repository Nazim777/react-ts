import React from 'react'

type ButtonProps={
    btnStyle:React.CSSProperties
}
const ButtonStyle = ({btnStyle}:ButtonProps) => {
  return (
    <div>
        <h1>style props</h1>
        <button style={btnStyle}>Click Me</button>
      
    </div>
  )
}

export default ButtonStyle
