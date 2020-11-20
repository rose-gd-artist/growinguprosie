import React, { useState, useEffect } from "react";
// import Header from "../Header";
// import Footer from "../Footer";
// import { Link } from "@reach/router";
import "./index.css";

const ShopItem = (props) => {

    const [product, setProduct] = useState({});

    useEffect(() => {
        
        const getItemDetails = async () => {
            const response = await fetch(`http://www.localhost:3000/shopItem/${props.shopItemId}`);
            const responseShopItem = await response.json();
            setProduct(responseShopItem);

        };
        getItemDetails();
    }, []);
       
    return (

        <div className="shopItemDetails">
            <div className="itemDetails" name={product.name}>
                <img src={window.location.origin + "/images/" + product.picture} alt={product.name} className="itemDetailPic"/>
                <p className="itemType">{product.itemType}</p>
                <p className="itemDetail">{product.name}</p>
                <p className="itemPrice">{product.price}</p>
                <button onClick={() => props.addToCart(product)}>Add to cart</button>
            </div>
        </div>
    );           

};

export default ShopItem;