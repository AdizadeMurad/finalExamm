import React from 'react'
import { Link } from 'react-router-dom'
import './FooterExam.scss'
function FooterExam() {
  return (
  <>
  <section className='footer'>

    <div className='footer-general'>
        <div className='links-all'>
<div className='footer-us'>
<h2>About Us</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.   </p>
</div>
<div className='quicklinks'>
  <h2>Quick Links</h2>
<Link>About Us</Link>
<Link>Services</Link>
<Link>Testimonals</Link>
<Link>Contact Us</Link>
</div>
<div>
<h2>Follow Us</h2>
<i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-linkedin"></i>
                  <i class="fa-brands fa-instagram"></i>
</div>
<div>
<h2>Featured Product</h2>
<img className='img' src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg" alt="" />
<h2>Leather Brown Shoe</h2>
<p>$60.00</p>
<button>Add to Cart</button>
</div>
        </div>
        <div>
            <p>Copyright ©2024 All rights reserved | This template is made with <i class="fa-solid fa-heart"></i>  by Colorlib</p>
        </div>
    </div>
  </section>
  </>
  )
}

export default FooterExam