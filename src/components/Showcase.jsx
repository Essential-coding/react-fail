import React from 'react'
import ShowCaseImg from "../assets/ShowCaseImage/showcase-image.svg"
import bg_Lines from "../assets/ShowCaseImage/bg-lines-showcase.svg"
import TransparentButton from '../components_core/TransParentButton'
import YellowButton from "../components_core/YellowButton"

const Showcase = () => {
  return (
    <section className="showcase">
    <img src={bg_Lines} className="bg-lines" alt=""/>
    <div className="container">
        <div className="content">
            <h1>We Provide The Best Business Solution
            </h1>
            <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
            <YellowButton  text="Get Consulting" url="/"></YellowButton>
            <TransparentButton text="Learn More" url="/"></TransparentButton>
        </div>
        <img src={ShowCaseImg} alt="Image of a man in a suit holding a tablet"/>
    </div>


</section>
  )
}

export default Showcase