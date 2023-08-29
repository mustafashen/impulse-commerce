import React, { useEffect } from 'react'

export default function CarouselItem({myView, handleOpaqueControl, isOpaque}) {

  useEffect(() => {
    setTimeout(() => {
      handleOpaqueControl(true)
    }, 200);
  }, [myView])

  return (
    <div 
    key={myView.id} 
    id={myView.id} 
    className={`${myView.bc} transition-opacity duration-200 ${isOpaque ? 'opacity-100' : 'opacity-0'}`}
    ></div>
  )
}
