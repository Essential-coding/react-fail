import React from 'react'
import SectionTitle from '../components_core/SectionTitle'
import aboutImage from "../assets/AboutImages/woman.jpg"
import aboutQuote from "../assets/AboutImages/about-quotes.png"
import { VideoButton } from '../components_core/VideoButton'
import BlackButton from '../components_core/BlackButton'
import whiteLines_img from "../assets/AboutImages/whiteLines.svg"

const AboutCompany = () => {
  return (
    <section className="about-company">

    <div className="container">

    <section>

        <SectionTitle 
        introText= "About Company"
        title="We Are Business Consulting & Credit Repair Experts">
        </SectionTitle>
    
            <div className="about-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda
                    esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt
                    adipisci accusantium libero provident voluptate amet.</p>
            </div>

            <button>
              
                <BlackButton
                    text="Learn More" url="/">
                </BlackButton>

                <VideoButton
                    text = "Intro Video" url="/">
                </VideoButton>
            </button>
            </section>

        <aside>

            <div className="about-image">
                <img src={whiteLines_img} className="about-lines-img" alt=""/>
                <img src={aboutImage}
                    alt="Woman walking inside office while holding a tablet"/>
                <div className="about-quote">
                    <img src={aboutQuote}
                        alt="A quote that says Samantha Brown,Founder"/>
                </div>
            </div>
        </aside>
    </div>
</section>
  )
}

export default AboutCompany