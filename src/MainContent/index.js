import React from "react";
import './index.css';
import IndexItem from "../IndexItem";
import Reviews from "../Reviews";
import { Link } from "@reach/router";


const MainContent = (props) => {

    return (
        <div className="indexPage">
  
                {props.products.map((product) => {

                    return (
                        <Link to={`shopOwner/1/shopItem/${product.id}`} className="indexLink2Item">

                            <IndexItem {...product} addProductToCart={props.addProductToCart} />

                        </Link>

                    );
                })}

            <Reviews />

        </div>



    );
};

export default MainContent;