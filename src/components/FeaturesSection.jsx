import React from 'react'
import feature_1 from "../assets/FeatureImages/feature-1.png"
import feature_2 from "../assets/FeatureImages/feature-2.png"
import feature_3 from "../assets/FeatureImages/feature-3.png"
import feature_4 from "../assets/FeatureImages/feature-4.png"
import SectionTitle from '../components_core/SectionTitle'
import YellowButton from '../components_core/YellowButton'


const FeaturesSection = () => {



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
                    <section className='box-1'>
                        <div className='feature-img feature-content'>
                            <img src={feature_1} alt="" />
                        </div>
                        <div className='feature-title feature-content'>
                            <h3>Business Advice</h3>
                        </div>
                        <div className='feature-text feature-content'>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </section>
                    <section className='box-1'>
                        <div className='feature-img feature-content'>
                            <img src={feature_2} alt="" />
                        </div>
                        <div className='feature-title feature-content'>
                            <h3>Startup Business</h3>
                        </div>
                        <div className='feature-text feature-content'>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </section>
                    <section className='box-1'>
                        <div className='feature-img feature-content'>
                            <img src={feature_3} alt="" />
                        </div>
                        <div className='feature-title feature-content'>
                            <h3>Financial Advice</h3>
                        </div>
                        <div className='feature-text feature-content'>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </section>
                    <section className='box-1'>
                        <div className='feature-img feature-content'>
                            <img src={feature_4} alt="" />
                        </div>
                        <div className='feature-title feature-content'>
                            <h3>Risk Management</h3>
                        </div>
                        <div className='feature-text feature-content'>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </section>
                </section>
            </div>
        </section>
    )
}

export default FeaturesSection