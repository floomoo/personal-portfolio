import React from 'react'
import Strings from '../share/Strings'

function Services() {
  return (
    <div>
      <div className='flex items-center'>
                <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
                <div className='w-full border-[1px] mx-4 mt-[-2px]'></div>
                <h2>{Strings.SERVICES}</h2>
                <div className="w-full border-[1px] mt-[-2px] mx-4"></div>
                <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
    </div>
    </div> 
  )
}

export default Services
