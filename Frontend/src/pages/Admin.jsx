import React from 'react'
import { useState, useEffect } from 'react'
import './Admin.scss'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
function Admin() {
    const [search, setsearch] = useState("")

    const [mydata, setmydata] = useState([])
const filteredData = [...mydata.filter((x)=>x.title.trim().toLowerCase().includes(search))]
    useEffect(() => {
        getAllproducts()
    }, [])


    async function getAllproducts() {
        const res = await fetch('http://localhost:3000/products')
        const data = await res.json()
        setmydata(data)
    }




    async function handleDelete(id) {
        const res = await fetch('http://localhost:3000/products/' + id, {
            method: 'delete'
        })
        const data = await res.json()
        getAllproducts()
    }


    function SortAz(params) {
        setmydata(mydata.toSorted((a, b) => (a[params] > b[params]) ? 1 : ((b[params] > a[params]) ? -1 : 0)))
    }
    function SortZa(params) {
        setmydata(mydata.toSorted((a, b) => (a[params] < b[params]) ? 1 : ((b[params] < a[params]) ? -1 : 0)))
    }



    return (


        <>
            <Helmet>
                <title>Murad Adizade</title>
                <link rel="icon" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNWJDZV3t91JPg_6M7rFojFC-lGzpyGW9XxKxJcMIGuw&s" />
            </Helmet>

            <h2 style={{ marginBottom: "50px", fontSize: "50px" }}>AdminPanel</h2>

            <div className='filter-btn'>
                <button onClick={() => SortAz("price")}><i class="fa-solid fa-arrow-down-a-z"></i></button>
                <button onClick={() => SortZa("price")}><i class="fa-solid fa-arrow-up-a-z"></i></button>
            </div>

 <input type="text" value={search} onChange={(e)=>(
                                setsearch(e.target.value.trim().toLowerCase())
                            )}/>

            <table> 
                {filteredData
                    .map((x) => {

                        return <>
                          
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Text</th>
                                <th>Price</th>
                                <th>Crud</th>

                            </tr>
                            <tr>
                                <td><img className='img' src={x.image} alt="" /></td>
                                <td><p>{x.title}</p></td>
                                <td>{x.text}</td>
                                <td>{x.price}</td>
                                <td>
                                    <button ><Link to={`/Uptade/${x._id}`}>Uptade</Link></button>
                                    <button onClick={() => handleDelete(x._id)}>Delete</button>
                                </td>
                            </tr>
                        </>
                    })}

            </table>

        </>
    )
}

export default Admin