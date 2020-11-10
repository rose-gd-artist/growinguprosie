import React, {useState, useEffect} from "react";
import './index.css';

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
  
                {responseShopItem.forEach((item) => {

                    <div className="indexItem">
                        <img src={window.location.origin + '/images/10FingersPic.jpg'} alt="10 Fingers 10 Toes I'm Good Onesie" className="indexPic"/>
                        <p className="indexItemType">itemType={item.itemType}</p>
                        <p className="indexItemDetail">name={item.name}</p>
                        <p className="indexItemPrice">price={item.price}</p>
                    </div>
                })}
    
            {/* {responseShopItem.forEach((item) => {

                <div className="indexItem">
                    <img src={window.location.origin + '/images/10FingersPic.jpg'} alt="10 Fingers 10 Toes I'm Good Onesie" className="indexPic"/>
                    <p className="indexItemType">itemType={item.itemType}</p>
                    <p className="indexItemDetail">name={item.name}</p>
                    <p className="indexItemPrice">price={item.price}</p>
                </div>

            })} */}
            {/* <div className="indexItem">
                <img src={window.location.origin + '/images/10FingersPic.jpg'} alt="10 Fingers 10 Toes I'm Good Onesie" className="indexPic"/>
                <p className="indexItemType">{responseShopItem.itemType}</p>
                <p className="indexItemDetail">{responseShopItem.name}</p>
                <p className="indexItemPrice">{responseShopItem.price}</p>
            </div> */}
        </div>

    );
};


// const MainContent = (props) => {

//     const [responseShopItem, shopItemInfo] = useState([]);

//     useEffect(() => {
//         const getItemData = async () => {
//             const response2 = await fetch(`http://www.localhost:3000/shopOwner/1/shopItem`);
//             const responseShopItem = await response2.json();
//             shopItemInfo(responseShopItem);
//         };
//         getItemData();
//     }, []);

//     return (
//         <div className="contentPage">
//             <div className="indexItem">
//                 <img src={window.location.origin + '/images/10FingersPic.jpg'} alt="10 Fingers 10 Toes I'm Good Onesie" className="indexPic"/>
//                 <p className="indexItemType">{responseShopItem.itemType}</p>
//                 <p className="indexItemDetail">{responseShopItem.name}</p>
//                 <p className="indexItemPrice">{responseShopItem.price}</p>
//             </div>
//             <div className="indexItem">
//                 <img src={window.location.origin + '/images/10FingersPic.jpg'} alt="1o Fingers 10 Toes I'm Good Onesie" className="indexPic"/>
//                 <p className="indexItemType">Infant Onesie</p>
//                 <p className="indexItemDetail">10 Fingers 10 Toes I'm Good</p>
//                 <p className="indexItemPrice">$15.00</p>
//             </div>
//             <div className="indexItem">
//                 <img src={window.location.origin + '/images/10FingersPic.jpg'} alt="1o Fingers 10 Toes I'm Good Onesie" className="indexPic"/>
//                 <p className="indexItemType">Infant Onesie</p>
//                 <p className="indexItemDetail">10 Fingers 10 Toes I'm Good</p>
//                 <p className="indexItemPrice">$15.00</p>
//             </div>
//             <div className="indexItem">
//                 <img src={window.location.origin + '/images/10FingersPic.jpg'} alt="10 Fingers 10 Toes I'm Good Onesie" className="indexPic"/>
//                 <p className="indexItemType">Infant Onesie</p>
//                 <p className="indexItemDetail">10 Fingers 10 Toes I'm Good</p>
//                 <p className="indexItemPrice">$15.00</p>
//             </div>
//             <div className="indexItem">
//                 <img src={window.location.origin + '/images/10FingersPic.jpg'} alt="1o Fingers 10 Toes I'm Good Onesie" className="indexPic"/>
//                 <p className="indexItemType">Infant Onesie</p>
//                 <p className="indexItemDetail">10 Fingers 10 Toes I'm Good</p>
//                 <p className="indexItemPrice">$15.00</p>
//             </div>
//             <div className="indexItem">
//                 <img src={window.location.origin + '/images/10FingersPic.jpg'} alt="1o Fingers 10 Toes I'm Good Onesie" className="indexPic"/>
//                 <p className="indexItemType">Infant Onesie</p>
//                 <p className="indexItemDetail">10 Fingers 10 Toes I'm Good</p>
//                 <p className="indexItemPrice">$15.00</p>
//             </div>
//         </div>

//     );
// };

export default MainContent;