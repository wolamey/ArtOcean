import React from 'react'
import "./Cart.scss"


export default function Cart({ cartCounter, setCartCounter }) {

    
    return (
        <div className='cart_container'>
            <p className="page_path">
                Main /  <b>Cart</b>
            </p>
            <div className="cart_main">
                <div className="cart_left">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <p>Product</p>
                                </td>
                                <td>
                                    <p>Quantity</p>
                                </td>
                                <td>
                                    <p>Price</p>
                                </td>
                            </tr>

                            {cartCounter.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        <img src={item.pic} alt="" />
                                        <p className="name_prod">{item.text}</p>
                                    </td>
                                </tr>
                            ))}


                        </tbody>
                    </table>

                </div>

                <div className="cart_right">

                </div>

            </div>
        </div>
    )
}
