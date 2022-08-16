import React from 'react'
import { SearchBox } from './SearchBox'
import Netflixlogo from './images/Netflixlogo.png'
export const NavBar = (props) => {
  return (
    <div> 
        <nav>
            <img src={Netflixlogo} className="nav--icon" />
            <ul className='nav--items'>
            <li className='nav--links'>Home</li>
            <li className='nav--links'>Series</li>
            <li className='nav--links'>Films</li>
            <li className='nav--links'>New & popular</li>
            <li className='nav--links'>My List</li>
            
            
            </ul><SearchBox searchValue = {props.searchValue} setSearchValue ={props.setSearchValue}/>
        </nav>
</div>
  )
}
