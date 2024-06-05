import React from 'react'

export default function WeatherHourRow({hour, temp}) {
  return (
      <article className='flex flex-col'>
          <p className='font-bold font-mono'>{hour}</p>
          <p>{temp}°</p>
      </article>
  )
}
