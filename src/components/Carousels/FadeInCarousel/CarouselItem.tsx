import React, { useEffect } from 'react'

type CarouselView = {
  id: string,
  bc: string
}

type Props = {
  myView: CarouselView,
  handleOpaqueControl: (isOpaque: boolean) => void,
  isOpaque: boolean
}

export default function CarouselItem({myView, handleOpaqueControl, isOpaque}: Props) {

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
