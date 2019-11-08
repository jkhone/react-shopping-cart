import React from 'react'
import { useCart } from '../redux/ducks/cart'

function Shop (props) {
    const { items } = useCart()
    console.log('data2', items)
    return (
        <div>
            {items.map((item, i)=> (
                <div key={'pic' + i}>
                    <img src={`/assets/${item.sku}_1.jpg`} alt=''/>
                </div>
            ))}
        </div>
    )
}

export default Shop