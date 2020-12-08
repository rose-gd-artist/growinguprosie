import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import "./index.css";
import CartItem from "../CartItem";

const ShoppingCart = (props) => {

    const [product, setProduct] = useState({});

    useEffect(() => {
        const getItemData = async () => {
            const response = await fetch(`http://www.localhost:3000/shopItem/${props.shopItemId}`);
            const responseShopItems = await response.json();
            setProduct(responseShopItems);
        };
        getItemData();

    }, []);

    let total = 0;

    const getTotal = (props) => {
        return props.cart.forEach((item) => total += item.price * item.quantity);
    };



    return (


        <div className="shoppingCartBackground">
            <Link to="/">
            <p>Back to search results</p>
            </Link>
            <div className="shoppingCartBox">

                {props.cart.map((item) => {

                    return <CartItem item={item} removeFromCart={props.removeFromCart} key={item.id} price={item.price} />
                })}
                {props.cart.length}
                {product.price}
            </div>  
            <div>
            <p>Total: $ {getTotal}</p>
            </div>
    
        </div>
    );           

};

export default ShoppingCart;