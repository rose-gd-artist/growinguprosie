import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import "./index.css";

const ShoppingCart = (props) => {

    const [product, setProduct] = useState({});
    //const [cart, setCart] = useState([]);
    //const [checkoutQuantity, setCheckoutQuantity] = useState({}); // made for checking for length of cart // if 0 button shouldn't work

    useEffect(() => {
        
        const getItemDetails = async () => {
            const response = await fetch(`http://www.localhost:3000/shoppingCart`);
            const responseShopItem = await response.json();
            setProduct(responseShopItem);

        };
        getItemDetails();
    }, []);
       
    // const cartEvaluator = (props) => {
    //     if(cart.length === 0){
    //         return (
    //             <div className="shoppingCartBox">
    //             <div className="noItemsInCart">
    //                 There are no items in your cart at this time.
    //             </div>
    //             </div>

    //         );
    //     } else {
    //         return (
    //             <div className="shoppingCartBox">
    //             <div className="itemInCart">
    //             </div>

    //             {/* <Link to={"/shopOwner/1/checkout"} >
    //             <button onClick={() => setCheckoutQuantity(cart)}>Checkout</button>
    //             </Link> */}
    //             </div>

    //         );
    //     };
    // }

    return (

        <div className="shoppingCartBackground">
            <Link to="/">
            <p>Back to search results</p>
            </Link>
            <Link to={`shopItem/${props.shopItemId}`}>
            <p>Keep Shopping</p>
            </Link>
            <div className="shoppingCartBox">
                <div className="noItemsInCart">
                    There are no items in your cart at this time.
                </div>
            </div>  
        </div>
    );           

};

export default ShoppingCart;