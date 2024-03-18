import React from 'react'
import "./Header.scss"
import logoHead from "../../../public/logoHeader.png"
import favIcon from "../../../public/fav_icon.png"
import userIcon from "../../../public/user_icon.png"
import cartIcon from "../../../public/cart_icon.png"
import { NavLink } from "react-router-dom"
import { useEffect } from 'react'


export default function Header({likeCount,cartCounter}) {

    return (
        <div className='header'>
            <div className="head_cont">
                <div className="header_container">
                    <div className="head_container_left">
                        <img className='logoImg' src={logoHead} alt="" />
                        <div className="head_links">
                        <NavLink  onClick={() => setPage('catalog')}   to='/catalog'> <p className="menu_link">Catalog</p></NavLink>

                            <a href="#">News</a>
                            <a href="#">Delivery</a>
                            <a href="#">About Us</a>
                            <a href="#">Contacts</a>
                        </div>
                    </div></div>
                <div className="head_container_right">

                    <div className='fav'>
                        <p>{likeCount}</p>
                        <img src={favIcon} alt="" />
                    </div>
                    <div className='my_icon'>
                        <img src={userIcon} alt="" />
                    </div>
                    <NavLink className='cart' onClick={()=> setPage('cart')} to = '/cart'>
                    <div >
                    <p>{cartCounter.length}</p>

                        <img src={cartIcon} alt="" />
                    </div>                        
                    </NavLink>

                </div>
            </div></div>
    )
}
