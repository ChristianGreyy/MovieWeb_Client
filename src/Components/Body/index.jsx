import React from 'react'
import './Body.scss'

const Body = ({ children }) => {
  return (
      <div className='body'>
          {children}
      </div>
  )
}

export default Body;