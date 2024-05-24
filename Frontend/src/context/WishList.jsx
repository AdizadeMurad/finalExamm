import React, { createContext } from 'react'
import { useState } from 'react'
export const WishListContext = createContext()
function WishList({ children }) {
    const [wishlist, setwishlist] = useState([])
    function IncreaseWishlist(item) {
        const index = wishlist.findIndex((x) => x._id === item._id)
        if (index !== -1) {
            setwishlist(wishlist.filter((x) => x._id !== item._id))
        }
        else {
            setwishlist([...wishlist, { ...item }])
        }
    }

function IsExist(item) {
    return wishlist.findIndex((x)=>x._id===item._id)!==-1
}

function RemoveWishList(item) {
    setwishlist(wishlist.filter((x) => x._id !== item._id))
}
    return (
        <>
            <WishListContext.Provider value={{ IncreaseWishlist, wishlist,IsExist,RemoveWishList }}>
                {children}
            </WishListContext.Provider>
        </>
    )
}

export default WishList