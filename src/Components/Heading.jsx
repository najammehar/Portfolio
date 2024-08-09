import React from 'react'

function Heading({bgText, text1, text2, bgColor}) {
  return (
    <div className="relative h-16 sm:h-28 mb-6 sm:mb-8 w-full flex items-center justify-center overflow-hidden">
          <h1 className={`uppercase absolute font-extrabold text-6xl sm:text-[110px] ${bgColor} select-none animate-float`}>
            {bgText}
          </h1>
          <h1 className="relative font-bold text-2xl sm:text-5xl z-10">
            {text1} <span className="text-primary-100">{text2}</span>
          </h1>
    </div>
  )
}

export default Heading