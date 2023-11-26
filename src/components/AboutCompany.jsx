import React from 'react'

const AboutCompany = () => {
  return (
    <section className="about-company">

    <div className="container">

        <header>
            <div className="about-title section-title">
                <p>About Company</p>
                <h2>We Are Business Consulting & Credit Repair Experts</h2>
            </div>
            <div className="about-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda
                    esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt
                    adipisci accusantium libero provident voluptate amet.</p>
            </div>

            <button>
                <a className="btn-black center-content" href="#">Learn More <i
                        className="fa-solid fa-arrow-up-right-from-square"></i></a>

                <a className="btn-video center-content" href="#"><i className="fa-regular fa-circle-play"></i>Intro
                    Video</a>
            </button>
        </header>

        <aside>

            <div className="about-image">
                <img src="images/about-company-lines.svg" className="about-lines-img" alt=""/>
                <img src="images/about-company.png"
                    alt="Woman walking inside office while holding a tablet"/>
                <div className="about-quote">
                    <img src="images/about-company-quotes.png"
                        alt="A quote that says Samantha Brown,Founder"/>
                </div>
            </div>
        </aside>
    </div>
</section>
  )
}

export default AboutCompany