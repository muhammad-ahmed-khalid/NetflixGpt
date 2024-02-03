import React, { useRef } from 'react'
import lang from '../../constants/LangConstant'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../../utility/openAi'
import { API_OPTIONS } from '../../constants/constants'
import { addSearchMovies } from '../../utility/movieSlice'

function GptSearchBar() {
  const searchRef = useRef(null)
  const selectedLang = useSelector((state) => state.lng.languageConfig);
  const dispatch = useDispatch();
 
const getSearchResult = async() => {
  const getResult = await fetch('https://api.themoviedb.org/3/search/movie?query=' + searchRef.current.value + '&include_adult=false&language=en-US&page=1', API_OPTIONS)
  const json = await getResult.json()
  dispatch(addSearchMovies(json?.results))
}


  const handleSearch = async() => {
    getSearchResult()
    // const getResults = await openai.chat.completions.create({
    //   message: [{role : "user", content: "How are you"}],
    //   model: "gpt-3.5-turbo"
    // })
    // console.log(getResults, "getResultsgetResultsgetResults")
}
 
  return (
    <div className='w-1/2 mr-auto ml-auto pt-[10%]'>
      <form onSubmit={(e) => e.preventDefault()} className=' bg-black gird grid grid-cols-12 px-4 rounded-md border-2 borderRed'>
        <input ref={searchRef} type="text" placeholder="Search Here..." className='col-span-9 m-3 py-2 px-4 rounded-md'/>
        <button className="bg-red-600 px-6 py-2 rounded text-white  m-3 font-bold h-auto col-span-3" onClick={() => handleSearch()}>{lang[selectedLang]?.Search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar