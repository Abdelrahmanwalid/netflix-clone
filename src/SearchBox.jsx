import React from 'react'

export const SearchBox = (props) => {
  return (
    <div className='search--box--container'>
        <input
         type="text"
         value={props.value}
         onChange= {(event)=> props.setSearchValue(event.target.value)}
         placeholder="Titles,people,genres"
         className='search--box'

          ></input>
    </div>
  )
}
