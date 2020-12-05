import React, { useState, useEffect } from "react";
import './index.css';
import IndexItem from "../IndexItem";
import Reviews from "../Reviews";
import { Link } from "@reach/router";


const MainContent = (props) => {

    return (
        <div className="indexPage">
  
                {props.products.map((item) => {

                    return (
                        <Link to={`shopOwner/1/shopItem/${item.id}`} className="indexLink2Item">

                            <IndexItem {...item} />

                        </Link>

                    );
                })}

            <Reviews />

        </div>



    );
};

export default MainContent;