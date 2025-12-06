import React from 'react'
import "./Winter.css"
import winter from '../assets/winter'
import Item from '../Components/Item/Item'

const Winter = () => {
  return (
    <div className='winter'>
        <h1>WINTER COLLECTIONS</h1>
        
        <div className='collection'>
            {winter.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
            })}

        </div>

    </div>
  )
}

export default Winter