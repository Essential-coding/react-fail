import React from 'react'

const BlackButton = ({url ,text}) => {
  return (
    <a className="btn-black center-content" href={url}>{text} <i
        className="fa-solid fa-arrow-up-right-from-square"></i></a>
  )
}

export default BlackButton