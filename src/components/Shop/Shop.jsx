import React from 'react'
import './Shop.css'
import shopmain from './images/shopmain.png'
import Dining from './images/Dining.png'
import Living from './images/living.png'
import Bedroom from './images/Bedroom.png'
import Hallmain from './images/hallmain.png'
import Chair from './images/chair.png'
import Orange from './images/orangesofa.png'
import white from './images/sofa.png'
import lightmain from './images/lightmain.png'
import sofaone from './images/sofaone.png'
import hall from './images/hall.png'
import rect from './images/Rec.png'
import rectt from './images/Rect2.png'
import funiro from './images/f.png'
import Trophy from './images/trophy.png'
import Guart from './images/guarantee.png'
import Shipping from './images/shipping.png'
import Support from './images/Support.png'
import Header from '../Header/Header'

function Shop() {
  return (
    <>
    <Header />
        <img src={shopmain} alt="" className="shopicon" />
    <div className="shopcont">
        {/* <div className="shopmainc">
            <div className="shopname">Shop</div>
            <div className="shoplocation">Home  &#62; Shop</div>
        </div> */}
    </div>
    <div className="shopbox">
    <div className="productc">
        <div className="hei">
        <img src={Chair} alt="" className="hallmain" />
        <div className="pna">Syltherine</div>
        <div className="lig">Stylish cafe chair</div>
        <div className="pri">Rp 2.500.000</div>
        </div>
        <div className="hei">
        <img src={hall} alt="" className="hallmain" />
        <div className="pna">Syltherine</div>
        <div className="lig">Stylish cafe chair</div>
        <div className="pri">Rp 8.500.000</div>
        </div>
        <div className="hei">
        <img src={lightmain} alt="" className="hallmain" />
        <div className="pna">Syltherine</div>
        <div className="lig">Stylish cafe chair</div>
        <div className="pri">Rp 7.500.000</div>
        </div>
        <div className="hei">
        <img src={Orange} alt="" className="hallmain" />
        <div className="pna">Syltherine</div>
        <div className="lig">Stylish cafe chair</div>
        <div className="pri">Rp 4.500.000</div>
        </div>
        <div className="hei">
        <img src={white} alt="" className="hallmain" />
        <div className="pna">Syltherine</div>
        <div className="lig">Stylish cafe chair</div>
        <div className="pri">Rp 5.000.000</div>
        </div>
        <div className="hei">
        <img src={Orange} alt="" className="hallmain" />
        <div className="pna">Syltherine</div>
        <div className="lig">Stylish cafe chair</div>
        <div className="pri">Rp 8.000.000</div>
        </div>
        <div className="hei">
        <img src={sofaone} alt="" className="hallmain" />
        <div className="pna">Syltherine</div>
        <div className="lig">Stylish cafe chair</div>
        <div className="pri">Rp 9.000.000</div>
        </div>
        <div className="hei">
        <img src={Hallmain} alt="" className="hallmain" />
        <div className="pna">Syltherine</div>
        <div className="lig">Stylish cafe chair</div>
        <div className="pri">Rp 8.000.000</div>
        </div>
        <div className="hei">
        <img src={Chair} alt="" className="hallmain" />
        <div className="pna">Syltherine</div>
        <div className="lig">Stylish cafe chair</div>
        <div className="pri">Rp 2.500.000</div>
        </div>
        <div className="hei">
        <img src={hall} alt="" className="hallmain" />
        <div className="pna">Syltherine</div>
        <div className="lig">Stylish cafe chair</div>
        <div className="pri">Rp 2.500.000</div>
        </div>
        <div className="hei">
        <img src={lightmain} alt="" className="hallmain" />
        <div className="pna">Syltherine</div>
        <div className="lig">Stylish cafe chair</div>
        <div className="pri">Rp 2.500.000</div>
        </div>
        <div className="hei">
        <img src={Orange} alt="" className="hallmain" />
        <div className="pna">Syltherine</div>
        <div className="lig">Stylish cafe chair</div>
        <div className="pri">Rp 2.500.000</div>
        </div>
    </div>
    </div>
    <div className="customersupport">
        <div className="customerinner">
                <img src={Trophy} alt="" className="trpohy" />
            <div className="boxcust">
                <div className="high">High Quality</div>
                <div className="material">crafted from top materials</div>
            </div>
            <img src={Guart} alt="" className="trpohy" />
            <div className="boxcust">
                <div className="high">Warranty Protection</div>
                <div className="material">Over 2 years</div>
            </div>
            <img src={Shipping} alt="" className="trpohy" />
            <div className="boxcust">
                <div className="high">Free Shipping</div>
                <div className="material">Order over 150 $</div>
            </div>
            <img src={Support} alt="" className="trpohy" />
            <div className="boxcust">
                <div className="high">24 / 7 Support</div>
                <div className="material">Dedicated support</div>
            </div>
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
              {/* <div className="sub">SUBSCRIBE</div>   */}
            </div>
          </footer>
          <div className="lastcont">
          <div >2023 furino. All rights reverved</div>
          </div>
    </>
  )
}

export default Shop