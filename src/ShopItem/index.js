import React, { useState, useEffect } from "react";
import Reviews from "../Reviews";
import { Link } from "@reach/router";
import "./index.css";

const ShopItem = (props) => {

    const [product, setProduct] = useState({});
    const [ownerSpec, setOwnerSpec] = useState({});

    useEffect(() => {
        
        const getItemDetails = async () => {
            const response = await fetch(`http://www.localhost:3000/shopItem/${props.shopItemId}`);
            const responseShopItem = await response.json();
            setProduct(responseShopItem);

        };

        const getShopOwnerSpecs = async () => {
            const response = await fetch("http://www.localhost:3000/shopOwner/");
            const responseShopOwnerSpecs = await response.json();
            setOwnerSpec(responseShopOwnerSpecs);

        };
        getItemDetails();
        getShopOwnerSpecs();

    }, []);
       
    return (

        <div className="shopItemDetails">
            <Link to="/">
            <p>Back to search results</p>
            </Link>
            <div className="itemDetails" name={product.name}>
                <div className="leftSideItem">
                <img src={window.location.origin + "/images/" + product.picture} alt={product.name} className="itemDetailPic"/>
                </div>
                <div className="rightSideItem">
                <p className="itemType">{product.itemType}</p>
                <p className="itemDetail">{product.name}</p>
                <p className="itemPrice">{product.price}</p>
                <p>Material</p>
                <p>{product.materialType}</p>
                <p>Fabric Color</p>
                <p>{product.materialColor}</p>
                <p>Print Colors</p>
                <p>{product.printColor}</p>
                <p>Size</p>
                <p>{product.size} in US Numeric Sizing</p>
                <p>Description</p>
                <p>{product.description}</p>
                <p>Quantity</p>
                <p>{product.quantity}</p>
                <button className="buyNow" onClick={() => props.addToCart(product)}>Buy it now!</button>
                <button className="add2Cart" onClick={() => props.addToCart(product)}>Add to Cart</button>
                <p>Estimated Arrival</p>
                <p>{ownerSpec.shipping}</p>
                <button>View shop policies</button>
                <p>Meet your seller</p>
                <p>Rosemary Meyers</p>
                <p>Sales</p>
                <p>0</p>
                <p>Based in</p>
                <p>Philadelphia, Pennsylvania</p>
                <button>Message Rosemary</button>
                <p>This seller usually responds within 24 hours</p>
                </div>
            </div>  
            <Reviews />
        </div>
    );           

};

export default ShopItem;