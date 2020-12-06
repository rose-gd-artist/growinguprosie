import React, { useState, useEffect } from "react";
import Reviews from "../Reviews";
import { Link } from "@reach/router";
import "./index.css";

const ShopItem = (props) => {

    const [ownerSpec, setOwnerSpec] = useState({});
    const [products, setProducts] = useState({});

    const product = props.products.find((product) => {
        return product.id === parseInt(props.shopItemId);
    });

    useEffect(() => {

        const getShopOwnerSpecs = async () => {
            const response = await fetch("http://www.localhost:3000/shopOwner/");
            const responseShopOwnerSpecs = await response.json();
            setOwnerSpec(responseShopOwnerSpecs);

        };

        getShopOwnerSpecs();

    }, []);
       
    return (

        <div className="shopItemDetails">
            <Link to="/">
            <p>Back to search results</p>
            </Link>
            <div className="itemDetails" name={props.name} id={props.id}>
                <div className="leftSideItem">
                <img src={window.location.origin + "/images/" + props.picture} alt={props.name} className="itemDetailPic"/>
                </div>
                <div className="rightSideItem">
                <p className="itemType">{props.itemType}</p>
                <p className="itemDetail">{props.name}</p>
                <p className="itemPrice">$ {props.price}</p>
                <p>Material</p>
                <p>{props.materialType}</p>
                <p>Fabric Color</p>
                <p>{props.materialColor}</p>
                <p>Print Colors</p>
                <p>{props.printColor}</p>
                <p>Size</p>
                <p>{props.size} in US Numeric Sizing</p>
                <p>Description</p>
                <p>{props.description}</p>
                <p>Quantity</p>
                <p>{props.quantity}</p>
                {/* <button className="buyNow" onClick={() => props.addToCart(product)}>Buy it now!</button> */}
                {props.quantity > 0 ? <button className="add2Cart" onClick={() => props.addProductToCart(product)} >Add to Cart</button> : <p>Out of stock</p>}
                {/* <button className="add2Cart" onClick={() => props.addToCart(product)} >Add to Cart</button> */}
                <p>Estimated Arrival</p>
                <p>{ownerSpec.shipping}</p>
                <button>View shop policies</button>
                <p>Meet your seller</p>
                <p>Rosemary Meyers</p>
                <p>Sales</p>
                <p>0</p>
                <p>Based in</p>
                <p>Philadelphia, Pennsylvania</p>
                <a href="mailto: rosemary.e.meyers@gmail.com"><button>Message Rosemary</button></a>
                <p>This seller usually responds within 24 hours</p>
                </div>
            </div>  
            <Reviews />
        </div>
    );           

};

export default ShopItem;