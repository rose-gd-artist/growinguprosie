import React, {useState, useEffect} from "react";
import './index.css';
import IndexItem from "../IndexItem";
import ItemDetails from "../ItemDetails";
// import { Link } from "@reach/router";
// import images from './images.js';

const MainContent = (props) => {

    const [responseShopItem, shopIndexItem] = useState([]);
    //const [shopIndexItemClicked, shopItemDetail] = useState([]);

    useEffect(() => {
        const getItemData = async () => {
            const response2 = await fetch(`http://www.localhost:3000/shopOwner/1/shopItem`);
            const responseShopItem = await response2.json();
            shopIndexItem(responseShopItem);
        };
        getItemData();
    }, []);

    return (
        <div className="indexPage">
  
                {responseShopItem.map((item) => {

                    return (
                        <IndexItem id={item.id} name={item.name} itemType={item.itemType} price={item.price} picture={item.picture} />
                        // <Link to="/itemDetails" className="itemDetailsLink">
                        // <div className="indexItem" name={item.name} >
                        //     <img src={window.location.origin + "/images/" + item.picture} alt={item.name} className="indexPic"/>
                        //     <p className="indexItemType">{item.itemType}</p>
                        //     <p className="indexItemDetail">{item.name}</p>
                        //     <p className="indexItemPrice">{item.price}</p>
                        // </div>
                        // </Link>
                        //<Link to="/">Go Back</Link>
                        // <div className="itemDetails" name={item.name} >
                        // <img src={window.location.origin + "/images/" + item.picture} alt={item.name} className="itemPic"/>
                        // <p className="itemType">{item.itemType}</p>
                        // <p className="itemDetail">{item.name}</p>
                        // <p className="itemPrice">{item.price}</p>
                        // </div>

                    );
                })}
        </div>

    );
};

export default MainContent; 