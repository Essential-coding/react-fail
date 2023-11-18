import React from 'react'



const SectionTitle = ({introText, title}) => {
  return (
    <header className="section-title">
    <p>{introText}</p>
    <h2>{title}</h2>
</header>
  )
}

export default SectionTitle