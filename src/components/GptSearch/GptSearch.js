import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSearchList from './GptSearchList'
import { BG_IMAGE } from '../../constants/constants'

function GptSearch() {
  return (
    <div>
       <div className="absolute -z-10 loginBG">
        <img
          className="object-cover loginBGImage"
          sizes="cover"
          src={BG_IMAGE}
        />
      </div>
        <GptSearchBar />
        <GptSearchList />
    </div>
  )
}

export default GptSearch