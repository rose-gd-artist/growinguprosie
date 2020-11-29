import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import "./index.css";

const ShoppingCart = (props) => {

    //const [product, setProduct] = useState({});
    const [cart, setCart] = useState([]);
    //const [checkoutQuantity, setCheckoutQuantity] = useState({}); // made for checking for length of cart // if 0 button shouldn't work


    useEffect(() => {
        
        const getItemDetails = async () => {
            const response = await fetch(`http://www.localhost:3000/shoppingCart`);
            const responseShopItem = await response.json();
            setProduct(responseShopItem);

        };
        getItemDetails();
    }, [cart]);
       
    // const cartEvaluator = (props) => {

    //         return (
    //             <div>
    //                     {cart.map((props) => {
    //                         <div>
    //                             <p>{props.name}</p>
    //                             <p>{props.quantity}</p>
    //                             <p>{props.price}</p>
    //                         </div>
    //                     })}
    //             </div>
    //         );
    // }



    // const removeFromCart = (props) => {
    //     const cartList = [...props.cart];
    //     cartList = cartList.filter((cartItems) => cartItems.id !== props.cart.id);
    //     setCart(cartList);

    // };

    // const cartItems = props.cart.map((props) => (
    //     <div id={props.id}>
    //         <p>{props.name}</p>
    //         <p>{props.price}</p>
    //         <p>{props.quantity}</p>
    //         <input type="submit" value="remove" onClick={() => removeFromCart(props)}/>

    //     </div>
    // ));

    return (

        <div className="shoppingCartBackground">
            <Link to="/">
            <p>Back to search results</p>
            </Link>
            <Link to={`shopItem/${props.shopItemId}`}>
            <p>Keep Shopping</p>
            </Link>
            <div className="shoppingCartBox">
            {props.cart}
            </div>  
        </div>
    );           

};

export default ShoppingCart;