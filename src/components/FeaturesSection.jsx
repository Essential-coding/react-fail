import React from 'react'
import feature_1 from "../assets/FeatureImages/feature-1.png"
import feature_2 from "../assets/FeatureImages/feature-2.png"
import feature_3 from "../assets/FeatureImages/feature-3.png"
import feature_4 from "../assets/FeatureImages/feature-4.png"
import SectionTitle from '../components_core/SectionTitle'
import YellowButton from '../components_core/YellowButton'


const FeaturesSection = () => {
    
    const featureData = [
        {id:1, image:feature_1, title:"Business Advice", text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.", alt:"two hands shaking symbolizes agreement"},
        {id:2, image:feature_2, title:"Startup Business", text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.", alt:"Man's head inside a glowing lamp symbolizes great advices and ideas"},
        {id:3, image:feature_3, title:"Financial Advice", text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.", alt:"A diagram that symbolizes economic growth"},
        {id:4, image:feature_4, title:"Risk Management", text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.", alt:"Box with cog outside that symbolizes management"},

    ]; 



    return (
        <section className='container featureSection'>
            <div className='container feature-content'>
                <section className='container titleAndBtn'>
                    <SectionTitle
                        introText="Features" 
                        title="Our Accounting is trusted by thousand of companies">
                    </SectionTitle>

                    <section className='button'>
                        <YellowButton 
                        type="btn-yellow" 
                        text="Learn More" 
                        url="/">
                        </YellowButton>
                    </section>
                </section>
                <section className='features'>
                    {featureData.map ((feature) => (
                    <section className='box-1' key={feature.id}>
                        <div className='feature-img feature-content'>
                            <img src = {feature.image} alt = {feature.alt} ></img>
                        </div>
                        <div className='feature-title feature-content'>
                            <h3>{feature.title}</h3>
                        </div>
                        <div className='feature-text feature-content'>
                            <p>{feature.text}</p>
                        </div>
                    </section>
                    

                    ))};
                   </section>
                  
                
            </div>
        </section>
    )
}

export default FeaturesSection