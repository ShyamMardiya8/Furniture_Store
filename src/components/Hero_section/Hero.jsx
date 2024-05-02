import React from 'react'
import './Hero.css'
import HeroImage from './images/Heroname.jpg'
import Dining from './images/Dining.png'
import Living from './images/living.png'
import Bedroom from './images/Bedroom.png'
import Hallmain from './images/hallmain.png'
import Chair from './images/chair.png'
import Orange from './images/orangesofa.png'
import white from './images/sofa.png'
import lightmain from './images/lightmain.png'
import sofaone from './images/sofaone.png'
import hall from './images/sofaone.png'
import rect from './images/Rec.png'
import rectt from './images/Rect2.png'
import funiro from './images/f.png'
import Header from '../Header/Header'

function Hero() {
  return (
    <>
    <Header />
    <div className="mainTop">
      <img src={HeroImage} alt="" className="Heroimage" />
    </div>
    <div className="browser">Browse The Range</div>
    <div className="bdesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolorum omnis aspernatur.</div>
    <div className="outermain">
      <div className="imagecont">
        <img src={Dining} alt="" className="one" />
        <img src={Living} alt="" className="one" />
        <img src={Bedroom} alt="" className="one" />
      </div>
      <div className="ourp">Our Products</div>
      <div className="productconat">
        <div className="height">
        <img src={Chair} alt="" className="hallmain" />
        <div className="pname">Syltherine</div>
        <div className="light">Stylish cafe chair</div>
        <div className="price"><a href="{Select}">Rp 2.500.000</a></div>
        </div>
        <div className="height">
        <img src={Orange} alt="" className="hallmain" />
        <div className="pname">Lolito</div>
        <div className="light">Luxury big sofa</div>
        <div className="price">Rp 7.000.000</div>
        </div>
        <div className="height">
        <img src={Hallmain} alt="" className="hallmain" />
        <div className="pname">Respira</div>
        <div className="light">Outdoor bar table and stool</div>
        <div className="price">Rp 500.000</div>
        </div>
        <div className="height">
        <img src={white} alt="" className="hallmain" />
        <div className="pname">Lolito</div>
        <div className="light">Luxury big sofa</div>
        <div className="price">Rp 7.000.000</div>
        </div>
        <div className="height">
        <img src={lightmain} alt="" className="hallmain" />
        <div className="pname">Grifo</div>
        <div className="light">Night lamp</div>
        <div className="price">Rp 1.500.000</div>
        </div>
        <div className="height">
        <img src={white} alt="" className="hallmain" />
        <div className="pname">Lolito</div>
        <div className="light">Luxury big sofa</div>
        <div className="price">Rp 7.000.000</div>
        </div>
        <div className="height">
        <img src={hall} alt="" className="hallmain" />
        <div className="pname">Muggo</div>
        <div className="light">Small mug</div>
        <div className="price">Rp 150.000</div>
        </div>
        <div className="height">
        <img src={Orange} alt="" className="hallmain" />
        <div className="pname">Lolito</div>
        <div className="light">Luxury big sofa</div>
        <div className="price">Rp 7.000.000</div>
        </div>
        <div className="height">
        <img src={lightmain} alt="" className="hallmain" />
        <div className="pname">Grifo</div>
        <div className="light">Night lamp</div>
        <div className="price">Rp 1.500.000</div>
        </div>
        <div className="height">
        <img src={white} alt="" className="hallmain" />
        <div className="pname">Lolito</div>
        <div className="light">Luxury big sofa</div>
        <div className="price">Rp 7.000.000</div>
        </div>
        <div className="height">
        <img src={hall} alt="" className="hallmain" />
        <div className="pname">Muggo</div>
        <div className="light">Small mug</div>
        <div className="price">Rp 150.000</div>
        </div>
        <div className="height">
        <img src={Orange} alt="" className="hallmain" />
        <div className="pname">Lolito</div>
        <div className="light">Luxury big sofa</div>
        <div className="price">Rp 7.000.000</div>
        </div>
        <div className="height">
        <img src={lightmain} alt="" className="hallmain" />
        <div className="pname">Grifo</div>
        <div className="light">Night lamp</div>
        <div className="price">Rp 1.500.000</div>
        </div>
        <div className="height">
        <img src={white} alt="" className="hallmain" />
        <div className="pname">Lolito</div>
        <div className="light">Luxury big sofa</div>
        <div className="price">Rp 7.000.000</div>
        </div>
        <div className="height">
        <img src={hall} alt="" className="hallmain" />
        <div className="pname">Muggo</div>
        <div className="light">Small mug</div>
        <div className="price">Rp 150.000</div>
        </div>
        <div className="height">
        <img src={Orange} alt="" className="hallmain" />
        <div className="pname">Lolito</div>
        <div className="light">Luxury big sofa</div>
        <div className="price">Rp 7.000.000</div>
        </div>
        
      </div>
        <div className="buttoncont">
          <button className='show'>Show More</button>
        </div>
        </div>
        <div className="beautifulcont">
            <div className="leftc">
              <div className="desc">50+ Beautiful rooms 
                <br />inspiration</div>
                    <div className="desc2">Our designer already made a lot of beautiful <br />prototipe of rooms that inspire you</div>
                    <div className="explorecon">
                        <button className='now'>Explore More</button>
                    </div>
              </div>
              <div className="rightcon">
                <img src={rect} alt="" className="rightm" />
                <img src={rectt} alt="" className="rightm" />
                <img src={Bedroom} alt="" className="rightm" />
              </div>
          </div>
          <footer className='footercont'>
            <div className="boxcon">
              <img src={funiro} alt="" className="funiro" />
              <div className="location">400 University Drive Suite 200 Coral <br />Gables, <br />
              FL 33134 USA</div>
            </div>
            <div className="boxt">
              <div className="link">Links</div>
              <div className="lline">Home</div>
              <div className="lline">Shop</div>
              <div className="lline">About</div>
              <div className="lline">Conatct</div>
            </div>
            <div className="boxt">
              <div className="link">Help</div>
              <div className="lline">Payment Options</div>
              <div className="lline">Returns</div>
              <div className="lline">Privacy Policies</div>
            </div>
            <div className="Emailbox">
              <input type="email" placeholder='Enter Your Email Address' className='email'/>
              {/* <div className="sub">SUBSCRIBE</div> */}
            </div>
          </footer>
          <div className="lastcont">
          <div>2023 furino. All rights reverved</div>
          </div>
    </>
  )
}

export default Hero