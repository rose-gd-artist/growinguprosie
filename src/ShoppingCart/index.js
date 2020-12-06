import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import "./index.css";
import CartItem from "../CartItem";

const ShoppingCart = (props) => {

    const [product, setProduct] = useState({});
    const [cart, setCart] = useState([]);
    //const [total, setTotal] = useState(0);

    // const getTotal = () => {

    // };




    useEffect(() => {
        const getItemData = async () => {
            const response = await fetch(`http://www.localhost:3000/shopItem/${props.shopItemId}`);
            const responseShopItems = await response.json();
            setProduct(responseShopItems);
        };
        getItemData();

    }, []);

    return (

        <div className="shoppingCartBackground">
            <Link to="/">
            <p>Back to search results</p>
            </Link>
            <div className="shoppingCartBox">

                {props.cart.map((product) => {
                    return <CartItem product={product} removeFromCart={props.removeFromCart} key={product.id} />
                })}
            </div>  
    
        </div>
    );           

};

export default ShoppingCart;