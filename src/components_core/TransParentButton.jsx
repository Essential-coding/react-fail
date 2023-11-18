import React from 'react'

const TransparentButton = ({text, url}) => {
  return (
    <a className="btn-transparent btn-login" href={url}>{text}<i
        className="fa-solid fa-arrow-up-right-from-square"></i></a>
  )
}

export default TransparentButton