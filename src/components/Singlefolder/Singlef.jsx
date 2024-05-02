import React from 'react'
import './Singlef.css'
import Orange from './images/orangesofa.png'
import funiro from './images/f.png'

function Singlef() {
  return (
    <>
    <div className="upperline">
        <div className="innerline">
        <div className="homename">Home &#x3e;</div>
        <div className="homename">Shop &#x3e;</div>
        <div className="homename">Respira &#x3e;</div>
        </div>
    </div>
    <div className="photosmain">
        <div className="photoinner">
    <div className="photoleft">
        <img src={Orange} alt="" className="orangephoto" />
    </div>
    <div className="photoright">
        <div className="productname">Potty</div>
        <div className="productprice">Rs. 250,000.00</div>
        <div className="descprodut">Setting the bar as one of the loudest speakers in its class,<br /> the Kilburn is a compact,stout-hearted hero with a well-balanced <br />udio which boasts a clear midrange and extended highs for a <br />sound.
        </div>
        <button className='addcart'>Add to Cart</button>
        <div className="deatils">sku: SS001 <br />
        Category: Sofas <br /> Tags: Sofa, Chair, Home, Shop</div>
    </div>
    </div>
    </div>
    <div className="descripation">
        <div className="descnames">Description</div>
        <div className="decinner">
            <div className="decname">Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</div>
            <div className="decname">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</div>
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

export default Singlef