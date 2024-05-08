import React from 'react'

const RightContent = (props) => {
  return (
    <div className='h-[85vh] overflow-hidden scroll-y overflow-y-scroll mt-4'>{props.children}</div>
  )
}

export default RightContent