import React, { useContext } from 'react'
import { MainContext } from '../context/MainProvider'

function Basket() {
    const {basket, DecreaseBasket, RemoveBasket, IncreaseBasket} = useContext(MainContext)
  return (
<>
<div className='ourproducts-cards'>
            {
              basket.map((x) => {
                return <>
                  <div className='products-card'>
                    <img className='img-products' src={x.image} alt="" />
                    <p>{x.title}</p>
                    <p>{x.text}</p>
                    <div className='products-button'>
                      <button className='cart'>CART</button>
                      <button className='view'>VIEW</button>
                      <p>Count :    {x.count}</p>
                      <button  onClick={()=>RemoveBasket(x)}>Remove</button>
                      <button onClick={()=>IncreaseBasket(x)}>+</button>
                      <button onClick={()=>DecreaseBasket(x)}>-</button>
                    </div>
                  </div>
                </>
              })
            }
          </div>

</>  )
}

export default Basket