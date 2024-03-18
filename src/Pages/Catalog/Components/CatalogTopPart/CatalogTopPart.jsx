import React from 'react'
import { useState } from 'react';
import "./CatalogTopPart.scss"
import { NavLink } from "react-router-dom"

export default function CatalogTopPart({ data , setCatalogPart }) {
    const [selectedItem, setSelectedItem] = useState(data.HeaderTopPart[0]);

    function selectChoice(item) {
        setSelectedItem(item);
        setCatalogPart(catalogChoice[item.id - 1])
    }

    const catalogChoice = [data.copperDishesForCatalog, data.copperDishesForCatalog2,data.copperDishesForCatalog3,data.copperDishesForCatalog4] 

    return ( 
        <div className='catalog_top_part'>
            <p className="page_path">
                Main /  <b>Catalog</b>
            </p>
            <p className="page_name">Catalog</p>
            <div className="shop_choice">
                {data.HeaderTopPart.map((item) => (
                    <div onClick={() => selectChoice(item)} key={item.id} className={`choice ${selectedItem === item ? 'selected' : ''}`} style={{ backgroundImage: `url(${item.pic})` }}>
                        <div className="gradient-overlay"></div>
                        <p>{item.choice_name}</p>
                    </div>
                ))}
            </div>
            <hr className='separate_line' />
        </div>
    );
}
