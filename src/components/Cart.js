import React from 'react'
import { useCart } from '../redux/ducks/cart'
import '../styles/shop.css'
import Icon from '../lib/Icon'

function Cart(props) {
    const { cartItems, remove } = useCart()

    function handleRemove(item) {
        remove(item)
    }

    var cartPrices = cartItems.map(item => (
        item.item.price
    ))

    function getTotal(item1, item2) {
        return item1 + item2
    }

    var subtotal = cartPrices.reduce(getTotal, 0)

    return (
        <div className='cart'>
            <div>
                <Icon icon='shopping-cart'/>
                <p>Items in cart {cartItems.length}</p>
            </div>
            <div className='incart'>
                {cartItems.map((item, i)=> (
                    <div 
                    key={'pic' + i}
                    className='cartshirt'>
                        <img src={`/assets/${item.item.sku}_2.jpg`} alt=''/>
                        <p>{item.item.title}</p>
                        <p>{item.item.availableSizes[0]} | {item.item.style}</p>
                        <p>{item.item.currencyFormat}{item.item.price.toFixed(2)}</p>
                        <button
                        onClick={(e) => handleRemove(item.id)}>
                            Remove from cart
                        </button>
                    </div>
                ))}
            </div>
            <div>
                <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
            </div>
        </div>
    )
}

export default Cart