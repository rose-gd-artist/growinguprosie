import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import "./index.css";
import Reviews from "../Reviews";

const ShopItem = (props) => {

    const [ownerSpec, setOwnerSpec] = useState({});

    const product = props.products.find((product) => {
        return product.id === parseInt(props.shopItemId);
    });

    useEffect(() => {

        const getShopOwnerSpecs = async () => {
            const response = await fetch("http://www.localhost:3000/shopOwner");
            const responseShopOwnerSpecs = await response.json();
            setOwnerSpec(responseShopOwnerSpecs);

        };

        getShopOwnerSpecs();

    }, []);

    if (!product) {
        return null
    }

    return (

        <div className="shopItemDetails">
            <Link to="/" className="noUnderlineLink">
            <p>Back to search results</p>
            </Link>
            <div className="itemDetailsBox" name={product.name} key={product.id}>
                <div className="leftSideItem">
                <img src={window.location.origin + "/images/" + product.picture} alt={product.name} className="itemDetailPic"/>
                </div>
                <div className="rightSideItem">
                <p className="itemNameHead">{product.itemType} - {product.name}</p>
                <p className="itemDetailHeader">Price</p>
                <p className="itemDetail">$ {product.price}</p>
                <p className="itemDetailHeader">Material</p>
                <p className="itemDetail">{product.materialType}</p>
                <p className="itemDetailHeader">Fabric Color</p>
                <p className="itemDetail">{product.materialColor}</p>
                <p className="itemDetailHeader">Print Colors</p>
                <p className="itemDetail">{product.printColor}</p>
                <p className="itemDetailHeader">Size</p>
                <p className="itemDetail">{product.size} in US Numeric Sizing</p>
                <p className="itemDetailHeader">Quantity</p>
                <p className="itemDetail">{product.quantity}</p>
                <p className="itemDetailHeader">Description</p>
                <p className="itemDetail">{product.description}</p>

                {product.quantity > 0 ? <button className="add2Cart" onClick={() => props.addProductToCart(product)} >Add to Cart</button> : <p className="outOfStock">Out of stock</p>}

                <p className="itemDetailHeader">Estimated Arrival</p>
                <p className="itemDetail">5 - 7 business days after order is placed</p>
                <p className="itemDetailHeader">Seller</p>
                <p className="itemDetail">Rosemary Meyers</p>
                <p className="itemDetailHeader">Based in</p>
                <p className="itemDetail">Philadelphia, Pennsylvania</p>
                <a href="mailto: rosemary.e.meyers@gmail.com"><button className="itemContactButton">Message Seller</button></a>
                <p className="itemDetail">This seller usually responds within 24 hours</p>
                </div>
            </div> 
            <Reviews /> 
        </div>
    );           

};

export default ShopItem;