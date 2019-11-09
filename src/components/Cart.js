import React from 'react'
import { useCart } from '../redux/ducks/cart'
import '../styles/shop.css'
import Icon from '../lib/Icon'

function Cart(props) {
    const { cartItems, remove } = useCart()

    function handleRemove(item) {
        remove(item)
    }

    // Subtotal
    var cartPrices = cartItems.map(item => (
        item.item.price
    ))
    function getTotal(item1, item2) {
        return item1 + item2
    }
    var subtotal = cartPrices.reduce(getTotal, 0)

    return (
        <div className='cart'>
            <div className='cartcount'>
                <Icon icon='shopping-cart'/>
                <p>{cartItems.length}</p>
            </div>
            <div className='incart'>
                {cartItems.map((item, i)=> (
                    <div 
                    key={'pic' + i}
                    className='cartshirt'>
                        <img src={`/assets/${item.item.sku}_2.jpg`} alt=''/>
                        <div>
                            <p>{item.item.title}</p>
                            <p>{item.item.availableSizes[0]} | {item.item.style}</p>
                        </div>
                        <div>
                            <button
                            onClick={(e) => handleRemove(item.id)}>
                                X
                            </button>
                            <p>{item.item.currencyFormat}{item.item.price.toFixed(2)}</p>
                        </div>
                    </div>
                ))}
                <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
                <button>CHECKOUT</button>
            </div>
        </div>
    )
}

export default Cart