import React from 'react'
import "./Sort_Search.scss"
// import { Input, Ripple, initMDB } from "mdb-ui-kit";
// initMDB({ Input, Ripple });

export default function Sort_Search() {


    return (
        <div className='sort_search'>
            <form className='search_block'>
                <input type="search" placeholder="Search..." />
                <button type="submit"></button>
            </form>

            <form className='sortCatalog'>
                <label className='sort_title'>Sort by:</label>
                <select >
                    <option value="">price (low to high)</option>
                    <option value="">price (high to low)</option>
                    <option value="">popularity</option>
                    <option value="">newest</option>
                    <option value="">best selling</option>
                    <option value="">customer ratings</option>
                    <option value="">discount amount</option>
                </select>
            </form>
        </div>
    )
}
