import React, { createContext } from 'react'
export const MainContext = createContext()
import { useState } from 'react'
function MainProvider({ children }) {
    const [basket, setbasket] = useState([])

    function IncreaseBasket(item) {
        const index = basket.findIndex((x) => x._id === item._id)
        if (index !== -1) {
            basket[index].count++
            setbasket([...basket])
        }
        else {
            setbasket([...basket, { ...item, count: 1 }])
        }
    }


    function DecreaseBasket(item) {
        const index = basket.findIndex((x) => x._id === item._id)
        const num = basket[index].count
        if (num > 1) {
            basket[index].count--
            setbasket([...basket])
        }
    }

    function getCount() {
        return basket.find((x) => x._id === item._id).count

    }

    function RemoveBasket(item) {
        setbasket(basket.filter((x) => x._id !== item._id))
    }



    return (
        <>
            <MainContext.Provider value={{ getCount, basket, DecreaseBasket, RemoveBasket, IncreaseBasket }}>
                {children}
            </MainContext.Provider>
        </>
    )
}

export default MainProvider