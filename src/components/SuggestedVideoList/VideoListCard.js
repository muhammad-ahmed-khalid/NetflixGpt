import React from 'react'
import { IMAGE_URL } from '../../constants/constants'

function VideoListCard({data}) {
  const {
    title,
    poster_path
  } = data || {}
 
  if(!poster_path) return null

  return (
    <div className='mr-2'>
      <p className='text-white text-sm mb-4 min-h-11'>{title}</p>
      <img alt='Image Poster' src={IMAGE_URL + poster_path} className='max-w-[250px] border-2 borderRed mb-4 min-h-96'/>
    </div>
  )
}

export default VideoListCard