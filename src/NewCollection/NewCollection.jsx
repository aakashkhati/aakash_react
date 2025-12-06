import React from 'react'
import "./NewCollection.css"
import allproduct from '../assets/allproduct'
import Item from '../Components/Item/Item'

const NewCollection = () => {
  return (
    <div className='newcollection'>
        <h1>AVAILABLE PRODUCTS</h1>
        
        <div className='collection'>
            {allproduct.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
            })}

        </div>

    </div>
  )
}

export default NewCollection