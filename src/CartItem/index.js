import React from "react";

const CartItem = (props) => {

    return (

        <div className="cartItem" name={props.name} id={props.id} >
            <img src={window.location.origin + "/images/" + props.picture} alt={props.name} className="cartPic"/>
            <p className="cartItemType">{props.itemType}</p>
            <p className="cartItemDetail">{props.name}</p>
            <p className="cartItemQuantity">{props.quantity}</p>
            <p className="cartItemPrice">{props.price}</p>
            <input type="submit" value="delete" onClick={() => props.removeFromCart(props.id)}/>
        </div>

    );

}

export default CartItem;