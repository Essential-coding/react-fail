import React from 'react'
import SectionTitle from '../components_core/SectionTitle'
import TransparentButton from "../components_core/TransParentButton"
import ServiceImage_bg_Lines from "../assets/OurServicesImages/services-lines.svg"


const OurServices = () => {

    const serviceData = [
        {id:1, title:"Business Advice", text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", icon:"fa-solid fa-arrow-right"},
        {id:2, title:"Startup Business", text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", icon:"fa-solid fa-arrow-right"},
        {id:3, title:"Financial Advice", text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", icon:"fa-solid fa-arrow-right"},
        {id:4, title:"Risk Management", text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", icon:"fa-solid fa-arrow-right"}
    ];


  return (
    <section className="services">

    <div className="title-container container">
        
        <SectionTitle 
        introText = "Our Services"
        title = "We Provide The Best Service For Consulting">
        </SectionTitle>
        
     
    </div>
    <main>
        <div className="card-container container">
            { serviceData.map(((item) => 
            <article className="business-cards white-cards" key={item.id}> 
                <header>
                    <div className="customized-border"></div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                </header>
                <footer><i className={item.icon}></i></footer>
            </article>

          
     

)) }
        </div>{/*Second container*/}

    </main>

    <footer className='container browse-services'>
            <TransparentButton text="Browse Services" url ="/"> <i className="fa-solid fa-arrow-up-right-from-square"></i></TransparentButton>
    </footer>

    <img src={ServiceImage_bg_Lines} className="services-lines" alt="white background-lines"/>

</section>
  )
}

export default OurServices