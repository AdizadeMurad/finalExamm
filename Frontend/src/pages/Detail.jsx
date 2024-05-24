import React from 'react'
import { Helmet } from 'react-helmet-async';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
function Detail() {

  useEffect(() => {
    datas()
  }, [])


  const [mydata, setmydata] = useState([])

  const { id } = useParams()
  async function getAllproducts() {
    const res = await fetch('http://localhost:3000/products/' + id)
    const data = await res.json()
    return data
  }


  async function datas() {
    const dataByid = await getAllproducts(id)
    setmydata(dataByid)
  }



  return (
    <>
     <Helmet>
        <title>Murad Adizade</title>
        <link rel="icon" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNWJDZV3t91JPg_6M7rFojFC-lGzpyGW9XxKxJcMIGuw&s" />
      </Helmet>
      
        <div className='card'>
          <img className='img' src={mydata.image} alt="" />
          <p>{mydata.title}</p>
          <p>{mydata.text}</p>

        </div>


    </>
  )
}

export default Detail