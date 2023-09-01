'use client'

import { useReducer, useState, useEffect } from "react"
import CarouselItem from "./CarouselItem";

type ViewType = {
  view: number
}

type ActionType = {
  type: "PREV" | "NEXT"
}

export default function Carousel() {
  const carouselViewList = [{id: "cv-1", bc: "bg-red-400"},{id: "cv-2", bc: "bg-blue-400"},{id: "cv-3", bc: "bg-green-400"},{id: "cv-4", bc: "bg-yellow-200"}]
  const [touchStartLoc, setTouchStartLoc] = useState(0)
  const [touchMoveLoc, setTouchMoveLoc] = useState(0)
  const [isOpaque, setIsOpaque] = useState(false)

  useEffect(() => {
    setInterval(() => {
      next()
    }, 5000)
  }, [])

  const initialView: ViewType = {
    view: 0
  }
  
  function viewReducer(currentView: ViewType, action: ActionType) {
    setIsOpaque(false)
    setTouchStartLoc(0)
    setTouchMoveLoc(0)

    switch (action.type) {
      case 'NEXT':
        if (currentView.view === carouselViewList.length - 1) {
          return {
            view: 0
          }
        } else {
            return {
              view: currentView.view + 1
            }
        }
      case 'PREV':
        if (currentView.view === 0) {
          return {
            view: carouselViewList.length - 1
          }
        } else {
            return {
              view: currentView.view - 1
            }
        }
      default:
        break;
    }
  }
  
  const [currentView, dispatchCurrentView] = useReducer(viewReducer, initialView)


  
  function handleTouchStart(event: TouchEvent) {
    setTouchStartLoc(event.touches[0].clientX)
  }

  function handleTouchMove(event: TouchEvent) {
    if (!touchStartLoc) return false

    setTouchMoveLoc(event.touches[0].clientX)
  }

  function handleTouchEnd(e) {
    if (touchStartLoc && touchMoveLoc) {
      const swipeAmount = touchMoveLoc - touchStartLoc
      handleSwipe(swipeAmount)
    } else return false

    setTouchStartLoc(0)
    setTouchMoveLoc(0)
  }currentView

  function handleSwipe(swipeAmount: number) {

    if (swipeAmount > 200) { 
      prev()
    } else if (swipeAmount < -200) {
      next()
    }
  }

  function prev() {
    dispatchCurrentView({type: 'PREV'})
  }

  function next() {
    dispatchCurrentView({type: 'NEXT'})
  }

  function handleOpaqueControl(value: boolean) {
    setIsOpaque(value)
  }

  return (
    <div
      className="w-full h-full relative flex flex-row flex-nowrap [&>*]:w-full [&>*]:min-w-full [&>*]:h-full overflow-hidden -z-0"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      >
      <div className="max-lg:hidden w-full h-0 max-h-0 overflow-visible absolute top-1/2 flex flex-row justify-between items-center">
        <button className="h-24" 
          onClick={() => prev()}
        >
          Back
        </button>
        <button className="h-24" 
          onClick={() => next()}
        >
          Forward
        </button>
      </div>
      { 
        <CarouselItem myView={carouselViewList[currentView.view]} isOpaque={isOpaque} handleOpaqueControl={handleOpaqueControl}/>
      }
    </div>
  )
}
