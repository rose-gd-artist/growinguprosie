import React, {useState, useEffect} from "react";
import './index.css';
import IndexItem from "../IndexItem";
import { Link } from "@reach/router";


const MainContent = (props) => {


    const [products, productList] = useState([]);


    useEffect(async () => {
        const getItemData = async () => {
            const response = await fetch("http://www.localhost:3000/shopOwner/1/shopItem");
            const responseShopItems = await response.json();
            productList(responseShopItems);
        };
        getItemData();

    }, []);

    return (
        <div className="indexPage">
  
                {products.map((item) => {

                    return (
                        <Link to={`shopOwner/1/shopItem/${item.id}`} className="indexLink2Item">

                            <IndexItem {...item} />

                        </Link>


                    );
                })}
        </div>

    );
};

export default MainContent; 