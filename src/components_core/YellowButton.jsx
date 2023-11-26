import React from 'react'

const YellowButton = ({text, url, type}) => {
  return (

    <a className={type} href={url}>
      {text} 
    <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
  )
}

export default YellowButton