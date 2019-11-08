import React from 'react'
import '../styles/shop.css'

function Sizes (props) {
    return (
        <div className='sizes'>
            <h1>Sizes:</h1>
            <div className='sizecircles'>
                <span className='circle'>XS</span>
                <span className='circle'>S</span>
                <span className='circle'>M</span>
                <span className='circle'>ML</span>
                <span className='circle'>L</span>
                <span className='circle'>XL</span>
                <span className='circle'>XXL</span>
            </div>
        </div>
    )
}

export default Sizes