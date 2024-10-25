import React from 'react'

export const Button = ({children,onClick, label, type = 'primary'}) => {

    const data = label ? label: children

  return (
    <button onClick={onClick} className={type}>{ data}</button>
  )
}
