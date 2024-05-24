import React, { useContext } from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import { MainContext } from '../context/MainProvider'
function Navbar() {
    const {basket} = useContext(MainContext)
  return (
 <>
 <nav>
    <div className='general-navbar'>
        <div>
            <p className='selling'>Selling.</p>
        </div>
        <ul className='general-navbar-items'> 
            <Link to={'/'}><li>Home</li></Link>
            <Link to={'/Add'}><li>Add</li></Link>
            <Link to={'/Admin'}><li>Admin</li></Link>
            <Link to={'/Basket'}><li>Basket {basket.length}</li></Link>
            <Link to={'/Wishlist'}><li>Wishlist</li></Link>
            <Link><li>Blog</li></Link>
            <Link><li>Contact</li></Link>
        </ul>
    </div>
 </nav>
 </>
  )
}

export default Navbar