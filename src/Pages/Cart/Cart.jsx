
import React, { useState } from 'react';
import "./Cart.scss"
import { useEffect } from 'react';
import deleteIcon from '../../../public/trash_icon.png'
import cartPic from '../../../public/back_cart_pic.png'
import deliveryPic from '../../../public/delivery_icon.png'
import closeImg from "../../../public/cross.png";

export default function Cart({ cartCounter, setCartCounter }) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePlaceOrderClick = () => {
        setIsModalOpen(true);
    };

    const itemCounts = cartCounter.reduce((acc, item) => {
        acc[item.id] = (acc[item.id] || 0) + 1;
        return acc;
    }, {});

    const getTotalPrice = () => {
        let totalPrice = 0;
        cartCounter.forEach(item => {
            totalPrice += item.price;
        });
        return totalPrice;
    };

    const handleDeleteItem = (itemId) => {
        setCartCounter(prevCartCounter => {
            const updatedCart = prevCartCounter.filter(item => item.id !== itemId);
            localStorage.setItem('cartCounter', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    return (
        <div className='cart_container'>


            {isModalOpen && (
                <div className="modal" onClick={() => setIsModalOpen(false)}>
                    <div className="modal__container" onClick={(event) => { event.stopPropagation() }}>
                        <h2>Order Summary</h2>
                        <div className="modal__body">
                            <div className="cart__wrappper">
                                {cartCounter.length > 0 && cartCounter.map((item, index) => (
                                    <tr key={index}>
                                        {index === 0 || item.id !== cartCounter[index - 1].id ? (
                                            <>
                                                <td className='title_n_pic'>
                                                    <img className='position_picture' src={item.pic} alt="" />
                                                    <p className="name_prod">{item.text}</p>
                                                </td>
                                                <td>
                                                    <p className='cart_item_count'>{itemCounts[item.id]}</p>
                                                </td>
                                                <td>
                                                    <p className="cart_item_price">{item.price * itemCounts[item.id]}</p>
                                                </td>
                                                <td>
                                                    <button onClick={() => handleDeleteItem(item.id)}>
                                                        <img src={deleteIcon} alt="" />
                                                    </button>
                                                </td>
                                            </>
                                        ) : null}
                                    </tr>
                                ))}</div>

                            <button className='order__button'>Order</button></div>
                        <button onClick={() => setIsModalOpen(false)}><img className='closeimg' src={closeImg} alt="" /></button>
                    </div>
                </div>
            )}


            <p className="page_path">
                Main /  <b>Cart</b>
            </p>
            <p className="page_name">Catalog</p>
            <div className="cart_main">
                <div className="cart_left">
                    <table>
                        <tbody>
                            <tr className='table_title'>
                                <td>
                                    <p>Product</p>
                                </td>
                                <td className='quantity'>
                                    <p>Quantity</p>
                                </td>
                                <td className='price'>
                                    <p>Price</p>
                                </td>
                            </tr>

                            {cartCounter.length > 0 && cartCounter.map((item, index) => (
                                <tr key={index}>
                                    {index === 0 || item.id !== cartCounter[index - 1].id ? (
                                        <>
                                            <td className='title_n_pic'>
                                                <img className='position_picture' src={item.pic} alt="" />
                                                <p className="name_prod">{item.text}</p>
                                            </td>
                                            <td>
                                                <p className='cart_item_count'>{itemCounts[item.id]}</p>
                                            </td>
                                            <td>
                                                <p className="cart_item_price">{item.price * itemCounts[item.id]}</p>
                                            </td>
                                            <td>
                                                <button onClick={() => handleDeleteItem(item.id)}>
                                                    <img src={deleteIcon} alt="" />
                                                </button>
                                            </td>
                                        </>
                                    ) : null}
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>

                <div className="cart_right">
                    <img className='cart_pic' src={cartPic} alt="" />
                    <div className="total_price"><p className="total_price_title">
                        Total
                    </p>
                        <p className="total_price_count">{getTotalPrice()}</p>
                    </div>

                    <div className="place_order">
                        <div className="delivery_part">
                            <img src={deliveryPic} alt="" />
                            <p>You have free shipping!</p>
                        </div>
                        <button onClick={handlePlaceOrderClick}>Place an order</button>
                    </div>

                </div>
            </div>
        </div>
    )
}