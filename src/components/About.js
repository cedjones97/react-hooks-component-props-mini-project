import React from 'react'

function About({imgSrc = "https://via.placeholder.com/215", about}) {
  
  return (
    <div>
        <aside>
            <img src={imgSrc} alt='blog logo' />
            <p>{about}</p>
        </aside>
    </div>
  )
}

export default About