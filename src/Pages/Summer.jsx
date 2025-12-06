import React from 'react'
import "./Summer.css"
import summer from '../assets/summer'
import Item from '../Components/Item/Item'

const Summer = () => {
  return (
    <div className='summer'>
        <h1>SUMMER COLLECTIONS</h1>
        
        <div className='collection'>
            {summer.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
            })}

        </div>

    </div>
  )
}

export default Summer