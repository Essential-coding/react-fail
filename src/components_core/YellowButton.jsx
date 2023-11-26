import React from 'react'

const YellowButton = ({text, url,}) => {
  return (

    <a className="btn-yellow btn-login" href={url}>
      {text} 
    <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
  )
}

export default YellowButton