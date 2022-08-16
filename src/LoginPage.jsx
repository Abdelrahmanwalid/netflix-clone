import React from 'react';
import Netflixlogo from './images/Netflixlogo.png'
import {Profile} from './Profile.jsx'

    


export const LoginPage = (props) => {


  const profiles = props.users.map(item => {
    return (
        <Profile
            key={item.id}
            {...item}
            toggleLogin={props.toggleLogin}
        />
    )
  })  

  return (
    <div>
      <nav>
    <img src={Netflixlogo} className="nav--icon" />
    </nav>
    <main className='profile--selector'>
      <div>
    <h1 className='label'>Who's watching?</h1>
    <div className='profile--list'>
      {profiles}
    </div>
    <div className='button--position'>
    <button className='manage--profiles'>Manage Profiles</button>
    </div>
    </div>
    

    </main>
    </div>
  )
}
