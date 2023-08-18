import React from 'react'

function About({imgSrc = "https://via.placeholder.com/215", about}) {
  let cat = 'rose'
  console.log(cat)
  cat = 'ted'
  console.log(cat)
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