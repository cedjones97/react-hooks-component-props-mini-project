import React from 'react'

function Article({ title, date = "January 1, 1970", preview, minutes}) {
    
  return (
    <div>
      <article>
        <h3>{title}</h3>
        <small>{date} <em>* {minutes} minutes to read!</em></small>
        <p>{preview}</p>
      </article>
    </div>
  )
}

export default Article