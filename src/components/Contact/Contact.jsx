import React from 'react'
import './Contact.css'
import herotop from './images/shopmain.png'
import Vector from './images/Vector.png'
import Phone from './images/bxs_phone.png'
import Timer from './images/bi_clock-fill.png' 
import funiro from './images/f.png'
import Trophy from './images/trophy.png'
import Support from './images/Support.png'
import Guart from './images/guarantee.png'
import Shipping from './images/shipping.png'
import Header from '../Header/Header'
function Contact() {
  return (
    <>
    <Header />
    <div className="topimagecontact">
        <img src={herotop} alt="" className='top'/>
    </div>
    <div className="conatctdiv">
        <div className="contactnameo">Get In Touch With Us</div>
        <div className="contactdesc">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</div>
    </div>
    <div className="address">
        <div className="leftcont">
            <img src={Vector} alt="" className="locator" />
        <div className="leftadd">
            <div className="add">Address</div>
            <div className="adddesc">236 5th SE Avenue,
            <br /> New York NY10000, 
            <br />United States</div>
        </div>
        <img src={Phone} alt="" className="locator" />
        <div className="leftadd">
            <div className="add">Address</div>  
            <div className="adddesc">236 5th SE Avenue,
            <br /> New York NY10000, 
            <br />United States</div>
        </div>
        <img src={Timer} alt="" className="locator" />
        <div className="leftadd">
            <div className="add">Address</div>
            <div className="adddesc">236 5th SE Avenue,
            <br /> New York NY10000, 
            <br />United States</div>
        </div>
        </div>
        <div className="rightadd">
            <form action="">
                <label htmlFor="">Your Name</label>
                <br />
                <input type="text" name="" id="" placeholder='Enter Your Name'/>
                <br />
                <label htmlFor="">Email Address</label>
                <br />
                <input type="email" name="" id="" placeholder='Enter Your Email'/>
                <br />
                <label htmlFor="">Subject</label>
                <br />
                <input type="text" name="" id="" placeholder='Subject'/>
                <br />
                <button className='submit'>Submit</button>
            </form>
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
              {/* <div className="sub">SUBSCRIBE</div> */}
            </div>
          </footer>
    </>
  )
}

export default Contact