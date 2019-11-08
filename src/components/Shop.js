import React from 'react'
import { useCart } from '../redux/ducks/cart'
import '../styles/shop.css'
import CurrencyFormat from 'react-currency-format'

function Shop (props) {
    const { items, add } = useCart()

    function handleAdd(item) {
        add(item)
    }

    return (
        <div className='shop'>
            <div className='shoptop'>
                <h3>{items.length} Product(s) found</h3>
                <select>
                    <option>Select</option>
                    <option>Lowest to highest</option>
                    <option>Highest to lowest</option>
                </select>
            </div>
            
            <div className='products'>
                {items.map((item, i)=> (
                    <div 
                    key={'pic' + i}
                    className='shirt'>
                        <p 
                        className={item.isFreeShipping === true ? 'show' : 'hide'} >
                            Free shipping
                        </p>
                        <img src={`/assets/${item.sku}_1.jpg`} alt=''/>
                        <p className='title'>{item.title}</p>
                        <p>{item.currencyFormat}
                        <CurrencyFormat 
                        value={item.price} 
                        displayType={'text'} 
                        fixedDecimalScale={true} 
                        decimalScale={2}/></p>
                        <button
                        onClick={(e) => handleAdd(item)}>
                            Add to cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Shop