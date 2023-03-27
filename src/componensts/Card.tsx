import React from 'react'
// children props
type childrenProps={
    children:React.ReactNode
}
const Card = ({children}:childrenProps) => {
  return (
    <div>
      <h1>children props</h1>
        {children}
      
    </div>
  )
}

export default Card
