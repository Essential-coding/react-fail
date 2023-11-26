import React from 'react'

export const VideoButton = ({url, text}) => {
  return (
    <a className="btn-video center-content"
     href={url}><i className="fa-regular fa-circle-play"></i>{text}</a>
  )
}
