import React from 'react'


export const Profile = (props) => {
  return (
    <div className="profile" onClick={props.toggleLogin}>
        
        <img src= {process.env.PUBLIC_URL+props.Img} className='profile--image'  />
        <h2 className='profile--text'>{props.name}</h2>
    
    </div>
  )
}
