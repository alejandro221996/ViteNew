import React from 'react'
import Sun from '../icons/Sun'
export default function WeatherRow({day,temp,icon}) {
  return (
      <div className="grid grid-cols-5 rounded-xl border py-2 mt-2">
          <p className="text-2xl font-bold">{day}</p>
          {icon}
          <p className="text-2xl">11°</p>
          <p className='text-2xl'>-</p>
          <p className="text-2xl">{temp}</p>
      </div>
  )
}
