import React from 'react'
import Paperz_img from "../assets/SponsorsImages/paperz.svg"
import Dorfus_img from "../assets/SponsorsImages/dorfus.svg"
import Gobona_img from "../assets/SponsorsImages/gobona.svg"
import Martino_img from "../assets/SponsorsImages/martino.svg"
import Square_img from "../assets/SponsorsImages/square.svg"


const Sponsors = () => {

    const sponsorImages = [
        {src:Paperz_img, alt :"Logo of a company called Paperz"},
        {src:Dorfus_img, alt :"Logo of a company called Dorfus"},
        {src:Gobona_img, alt :"Logo of a company called Gobona"},
        {src:Martino_img,alt:"Logo of a company called Maritno"},
        {src:Square_img, alt:"Logo of a company called Square"},
    ]


  return (
    <section className="sponsors">
                <div className="container">
                    {
                       sponsorImages.map(({src, alt}) =>(
                        <img key ={alt} src={src} alt = {alt} />
                       ))
                    }
                </div>
            </section>
  )
}

export default Sponsors