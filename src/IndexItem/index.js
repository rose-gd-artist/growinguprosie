import React from "react";
import "./index.css";


const IndexItem = (props) => {

        return (

            <div className="indexItem" name={props.name} id={props.id} >
                <img src={window.location.origin + "/images/" + props.picture} alt={props.name} className="indexPic"/>
                <p className="indexItemType">{props.itemType}</p>
                <p className="indexItemDetail">{props.name}</p>
                <p className="indexItemPrice">{props.price}</p>
            </div>

        );
};

export default IndexItem;