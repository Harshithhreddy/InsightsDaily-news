import React from 'react'
import loading from './Spinner@1x-1.6s-200px-200px.gif'

export default function spinner() {
  return (
    <div className='text-center'>
      <img src={loading} alt="Loading..." />
    </div>
  )
}
