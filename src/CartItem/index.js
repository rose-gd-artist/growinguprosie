import React from "react";
import "./index.css";

const CartItem = (props) => {

    return (

        <div className="cartItem" name={props.item.name} id={props.item.id} >
            <div className="cartLeft">
                <img src={window.location.origin + "/images/" + props.item.picture} alt={props.item.name} className="cartPic"/>   
            </div>
            <div className="cartRight">
                <p className="cartItemName">{props.item.itemType} - {props.item.name}</p>
                <div className="cartColumns">
                <div className="cartItemIDLeft">
                    <p className="cartID">Color: </p>
                    <p className="cartID">Size: </p>
                    <p className="cartID">Quantity: </p>
                    <p className="cartID">Price: </p>
                </div>
                <div className="cartItemIDRight">
                    <p className="cartIDvalue">{props.item.materialColor}</p>
                    <p className="cartIDvalue">{props.item.size}</p>
                    <p className="cartIDvalue">{props.item.quantity}</p>
                    <p className="cartIDvalue">$ {props.item.price}</p>
                </div>
                </div>
                <input className="deleteItemButton" type="submit" value="Remove from cart" onClick={() => props.removeFromCart(props.item.id)}/>
            </div>
        </div>

    );

}

export default CartItem;