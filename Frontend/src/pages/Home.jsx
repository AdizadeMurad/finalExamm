import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async';
import "./Home.scss"
import { useState, useEffect } from 'react';
import { MainContext } from '../context/MainProvider';
import { Link } from 'react-router-dom';
import { WishListContext } from '../context/WishList';
import FooterExam from '../components/FooterExam';
function Home() {
  const { IncreaseBasket } = useContext(MainContext)
  const { IncreaseWishlist } = useContext(WishListContext)
  const [mydata, setmydata] = useState([])

  useEffect(() => {
    getAllproducts()
  }, [])


  async function getAllproducts() {
    const res = await fetch('http://localhost:3000/products')
    const data = await res.json()
    setmydata(data)
  }

  return (
    <>
      <Helmet>
        <title>Murad Adizade</title>
        <link rel="icon" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNWJDZV3t91JPg_6M7rFojFC-lGzpyGW9XxKxJcMIGuw&s" />
      </Helmet>



      <section className='section-top'>
        <div className='general-top'>
          <div className='general-text'>
            <p className='top-head'>Shop With Us</p>
            <p className='top-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
          </div>
          <div className='top-button'>
            <button className='shop-btn'>SHOP NOW</button>
            <button className='club-btn'>CLUB MEMBERSHIP</button>
          </div>
        </div>
      </section>









      <section className='fetchproducts'>
        <div className='fetchproducts-products'>
          <div className='ourproducts'>
            <p style={{color:"gray"}}>POPULAR PRODUCTS</p>
            <p className='ourproducts-head'>Our Products</p>
            <p style={{color:"gray"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>
          </div>
          <div className='ourproducts-cards'>
            {
              mydata.map((x) => {
                return <>
                  <div className='products-card'>
                    <img className='img-products' src={x.image} alt="" />
                    <p>{x.title}</p>
                    <p>{x.text}</p>
                    <div className='products-button'>
                      <button className='cart'>CART</button>
                      <button className='view'>VIEW</button>
                      <button onClick={() => IncreaseBasket(x)}><i class="fa-solid fa-basket-shopping"></i></button>
                      <button onClick={() => IncreaseWishlist(x)}><i class="fa-solid fa-heart"></i></button>
                      <button className='detail-btn'><Link to={`/Detail/${x._id}`}>Go Detail</Link></button>
                    </div>
                  </div>
                </>
              })
            }
          </div>
        </div>
      </section>


      <section className='aboutus-general'>
        <div className='aboutus'>
          <div className='img-aboutus'>
            <img className='img-merchant' src="https://preview.colorlib.com/theme/selling/images/about_1.jpg" alt="" />

          </div>
          <div className='general-aboutus'>
            <p>MERCHANT COMPANY</p>
            <p>About Us</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui fuga ipsa, repellat blanditiis nihil, consectetur. Consequuntur eum inventore, rem maxime, nisi excepturi ipsam libero ratione adipisci alias eius vero vel!</p>
            <button className='learn'>LEARN MORE</button>
          </div>
        </div>
      </section>





      <section className='leadership'>
        <div className='general-leadership'>
          <div>
            <p>TEAM</p>
            <h2>Leadership</h2>
          </div>
          <div>
            <div className='leadercards'>
              <div className='leadercard'>
                <img src="https://preview.colorlib.com/theme/selling/images/person_2.jpg" alt="" />
                <p>John Rooster</p>
                <p>CO-FOUNDER, PRESIDENT</p>
                <p>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                <div>
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-linkedin"></i>
                  <i class="fa-brands fa-instagram"></i>
                </div>
              </div>
              <div className='leadercard'>
                <img src="https://preview.colorlib.com/theme/selling/images/person_3.jpg" alt="" />
                <p>John Rooster</p>
                <p>CO-FOUNDER, PRESIDENT</p>
                <p>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                <div>
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-linkedin"></i>
                  <i class="fa-brands fa-instagram"></i>
                </div>
              </div>
              <div className='leadercard'>
                <img src="https://preview.colorlib.com/theme/selling/images/person_4.jpg" alt="" />
                <p>John Rooster</p>
                <p>CO-FOUNDER, PRESIDENT</p>
                <p>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                <div>
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-linkedin"></i>
                  <i class="fa-brands fa-instagram"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section className='offerservices'>
        <div className='offerservices-general'>
          <div>
            <p>OUR SERVICES</p>
            <h2>We Offer Services</h2>
          </div>
          <div className='all-cards'>
        <div className='all-card'>
        <div className='icon-all'>
              <div><i class="fa-solid fa-calendar-xmark"></i></div>
            </div>
            <div><p>Business Consulting</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p><Link>Learn More</Link></div>
        </div>
            
        <div className='all-card'>
        <div className='icon-all'>
              <div><i class="fa-solid fa-calendar-xmark"></i></div>
            </div>
            <div><p>Business Consulting</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p><Link>Learn More</Link></div>
        </div>

        <div className='all-card'>
        <div className='icon-all'>
              <div><i class="fa-solid fa-calendar-xmark"></i></div>
            </div>
            <div><p>Business Consulting</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p><Link>Learn More</Link></div>
        </div>

        <div className='all-card'>
        <div className='icon-all'>
              <div><i class="fa-solid fa-calendar-xmark"></i></div>
            </div>
            <div><p>Business Consulting</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p><Link>Learn More</Link></div>
        </div>

        <div className='all-card'>
        <div className='icon-all'>
              <div><i class="fa-solid fa-calendar-xmark"></i></div>
            </div>
            <div><p>Business Consulting</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p><Link>Learn More</Link></div>
        </div>

        <div className='all-card'>
        <div className='icon-all'>
              <div><i class="fa-solid fa-calendar-xmark"></i></div>
            </div>
            <div><p>Business Consulting</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p><Link>Learn More</Link></div>
        </div>
            
          </div>
        </div>

      </section>
<FooterExam></FooterExam>
    </>
  )
}

export default Home