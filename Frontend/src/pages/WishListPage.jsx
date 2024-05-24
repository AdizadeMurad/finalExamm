import React, { useContext } from 'react'
import { WishListContext } from '../context/WishList'

function WishListPage() {

    const{wishlist,RemoveWishList } = useContext(WishListContext)
  return (
  <>
<div className='ourproducts-cards'>
            {
              wishlist.map((x) => {
                return <>
                  <div className='products-card'>
                    <img className='img-products' src={x.image} alt="" />
                    <p>{x.title}</p>
                    <p>{x.text}</p>
                    <div className='products-button'>
                      <button>CART</button>
                      <button>VIEW</button>
                      <button onClick={()=>RemoveWishList(x)}>Remove</button>
                    </div>
                  </div>
                </>
              })
            }
          </div>

  </>
  )
}

export default WishListPage