import React from "react";

const CartItem = (props) => {

    return (

        <div className="cartItem" name={props.item.name} id={props.item.id} >
            <img src={window.location.origin + "/images/" + props.item.picture} alt={props.item.name} className="cartPic"/>
            <p className="cartItemType">{props.item.itemType}</p>
            <p className="cartItemDetail">{props.item.name}</p>
            <p className="cartItemQuantity">{props.item.quantity}</p>
            <p className="cartItemPrice">{props.item.price}</p>
            <input type="submit" value="delete" onClick={() => props.item.removeFromCart(props.item.id)}/>
        </div>

    );

}

export default CartItem;