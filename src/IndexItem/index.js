import React, { useState } from "react";
import "./index.css";


const IndexItem = (props) => {


    //const [open, setOpen] = useState(false);
    const [notClicked, clicked] = useState([]);
    const [responseShopItem2, shopIndexItem2] = useState([]);

    useEffect(() => {
        const getItemData2 = async () => {
            const response2 = await fetch(`http://www.localhost:3000/shopOwner/1/shopItem`);
            const responseShopItem2 = await response2.json();
            shopIndexItem2(responseShopItem2);
        };
        getItemData2();
    }, []);

        // const clickedItem = (props) => {

        //     return (

        //         // {open && responseShopItem.map(() => {
        //         //         return (
        //         //             <div className="itemDetail" name={props.name} id={props.id}>
        //         //             <img src={window.location.origin + "/images/" + props.picture} alt={props.name} className="itemPic"/>
        //         //             <p className="itemType">{props.itemType}</p>
        //         //             <p className="itemDetail">{props.name}</p>
        //         //             <p className="itemPrice">{props.price}</p>
        //         //             </div>
        //         //         );
        //         // })};
        //         <div className="itemDetail" name={props.name} id={props.id}>
        //         <img src={window.location.origin + "/images/" + props.picture} alt={props.name} className="itemPic"/>
        //         <p className="itemType">{props.itemType}</p>
        //         <p className="itemDetail">{props.name}</p>
        //         <p className="itemPrice">{props.price}</p>
        //         </div>
                
        //     );
        // };
        
        return (

            
            <div onClick={() => clicked(!notClicked)} className="indexItem" name={props.name} id={props.id} >

            {clicked && responseShopItem2.filter((itemDetails) => {
                if(itemDetails.id){
                    return (
                        <div className="itemDetail" name={itemDetails.name} id={itemDetails.id}>
                        <img src={window.location.origin + "/images/" + itemDetails.picture} alt={itemDetails.name} className="itemPic"/>
                        <p className="itemType">{itemDetails.itemType}</p>
                        <p className="itemDetail">{itemDetails.name}</p>
                        <p className="itemPrice">{itemDetails.price}</p>
                        </div>
                    );
                };
                // return (
                //     <div className="itemDetail" name={props.name} id={props.id}>
                //     <img src={window.location.origin + "/images/" + props.picture} alt={props.name} className="itemPic"/>
                //     <p className="itemType">{props.itemType}</p>
                //     <p className="itemDetail">{props.name}</p>
                //     <p className="itemPrice">{props.price}</p>
                //     </div>
                // );
            })}
                <img src={window.location.origin + "/images/" + props.picture} alt={props.name} className="indexPic"/>
                <p className="indexItemType">{props.itemType}</p>
                <p className="indexItemDetail">{props.name}</p>
                <p className="indexItemPrice">{props.price}</p>
            </div>

        );
};

export default IndexItem;