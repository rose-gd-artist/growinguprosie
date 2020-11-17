import React, {useState, useEffect} from "react";
import './index.css';
import IndexItem from "../IndexItem";
import ShopItem from "../ShopItem";
import { Link } from "@reach/router";
// import images from './images.js';

const MainContent = (props) => {

    //const [responseShopItem, shopIndexItem] = useState([]);
    const [products, productList] = useState([]);
    //const [product, productDetail] = useState({});
    //const [shopIndexItemClicked, shopItemDetail] = useState([]);

    useEffect(async () => {
        const getItemData = async () => {
            const response = await fetch(`http://www.localhost:3000/shopOwner/1/shopItem`);
            const responseShopItems = await response.json();
            return responseShopItems;
            //shopIndexItem(responseShopItem);
        };
        //getItemData();
        const products = await getItemData();
        productList(products);

        // const getItemDetails = async () => {
        //     const response = await fetch(`http://www.localhost:3000/shopOwner/1/shopItem/${props.shopItemId}`);
        //     const responseShopItem = await response.json();
        //     return responseShopItem;
        //     //shopIndexItem(responseShopItem);
        // };
        // //getItemData();
        // const product = await getItemDetails();
        // productDetail(product);
    }, []);

    return (
        <div className="indexPage">
  
                {products.map((item) => {

                    return (
                        <Link to={`shopOwner/1/shopItem/${item.id}`} className="indexLink2Item">

                            <div className="indexItem" name={item.name} id={item.id} >
                                <img src={window.location.origin + "/images/" + item.picture} alt={item.name} className="indexPic"/>
                                <p>{item.itemType}</p>
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                            </div>

                        </Link>


                    );
                })}
        </div>

    );
};

export default MainContent; 