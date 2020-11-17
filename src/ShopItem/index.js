import React, { useState, useEffect } from "react";
// import Header from "../Header";
// import Footer from "../Footer";
// import { Link } from "@reach/router";
import "./index.css";

const ShopItem = (props) => {

    //const [responseShopItem, shopIndexItem] = useState([]);

    const [product, productDetail] = useState({});

    useEffect(async (props) => {
        
        const getItemDetails = async () => {
            const response = await fetch(`http://www.localhost:3000/shopOwner/1/shopItem/${props.shopItemId}`);
            const responseShopItem = await response.json();
            return responseShopItem;

        };
        //getItemDetails();
        const product = await getItemDetails();
        productDetail(product);
    }, []);
       
    return (

        <div className="shopItemDetails">

        {product.forEach((shirt) => {
        
            return (
    
                <div className="itemDetails" name={shirt.name}>
                <img src={window.location.origin + "/images/" + shirt.picture} alt={shirt.name} className="itemDetailPic"/>
                <p className="itemType">{shirt.itemType}</p>
                <p className="itemDetail">{shirt.name}</p>
                <p className="itemPrice">{shirt.price}</p>
                </div>
            );    
            
        })}  

        </div>
    );           

};

export default ShopItem;