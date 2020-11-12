import React, {useState, useEffect} from "react";
import './index.css';
// import images from './images.js';

const MainContent = (props) => {

    const [responseShopItem, shopItemInfo] = useState([]);

    useEffect(() => {
        const getItemData = async () => {
            const response2 = await fetch(`http://www.localhost:3000/shopOwner/1/shopItem`);
            const responseShopItem = await response2.json();
            shopItemInfo(responseShopItem);
        };
        getItemData();
    }, []);

    return (
        <div className="contentPage">
  
                {responseShopItem.map((item) => {

                    return (
                        <div className="indexItem" name={item.name} >
                            <img src={window.location.origin + "/images/" + item.picture} alt={item.name} className="indexPic"/>
                            <p className="indexItemType">{item.itemType}</p>
                            <p className="indexItemDetail">{item.name}</p>
                            <p className="indexItemPrice">{item.price}</p>
                        </div>
                    );
                })}
        </div>

    );
};

export default MainContent;