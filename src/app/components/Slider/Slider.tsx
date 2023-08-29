'use client'
import { useRef } from "react";
import SliderItem from "./SliderItem";

export default function Slider() {
  const arbitaryData = new Array(30).fill(1)
  const scrollRef = useRef(null)

  function scroll(scrollOffset: number) {
    scrollRef.current.scrollLeft += scrollOffset
  }

  function next() {
    console.log('left')
    scroll(300)
  }

  function prev() {
    console.log('right')
    scroll(-300)
  }
  return (
    <div className="w-full h-36 relative border-solid border-2">
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
      <div ref={scrollRef} className="overflow-x-scroll scroll-smooth snap-x overflow-y-hidden flex flex-row flex-nowrap items-center w-full h-full [&>*]:w-[120px] [&>*]:min-w-[120px] [&>*]:h-full gap-x-4 ">
        {
          arbitaryData.map((el) => {
            return <SliderItem key={el}/>
          })
        }
      </div>
    </div>
  )
}
