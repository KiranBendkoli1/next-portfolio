import React, {  ReactNode } from 'react'

const Button:React.FC<{children: ReactNode, onClick?:()=>{}}>= ({children, onClick}) => {
  return (
    <button onClick={()=>onClick?.()}>{children}</button>
  )
}

export default Button