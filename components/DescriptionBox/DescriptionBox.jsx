import React from 'react'
import './DescriptionBox.css'
function DescriptionBox() {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="despcriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box-fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that facilitates
          buying and selling of products or services over the internet
          servers as a virtual marketplace where business and individauls
          showcase their products, interact with customers, and conduct
          transaction without the need for a physical presence. E-commerce
          websites have gained immense popularity due to their convenience, 
          accessibility, and the global reach they offer.
        </p>
        <p>
          E-commerce website typically displays products or services along
          with detailed descriptions, image and any available variations 
          (e.g : sizes, colors). Each usually has its own dedicated page
          with relevant information.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
