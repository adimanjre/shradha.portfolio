import React from 'react'

const Button = ({classList,value}:{classList:string, value:string}) => {
  return (
    <div>
        <button className={classList}>{value}</button>
    </div>
  )
}

export default Button