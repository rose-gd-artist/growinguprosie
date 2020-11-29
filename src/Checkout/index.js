import React from "react";

const Checkout = (props) => {

    const [product, setProduct] = useState({});

    useEffect(() => {
        
        const getItemDetails = async () => {
            const response = await fetch(`http://www.localhost:3000/shopItem/${props.shopItemId}`);
            const responseShopItem = await response.json();
            setProduct(responseShopItem);

        };
        getItemDetails();
    }, []);
       
    return (

        <div className="shoppingCartBackground">
            <Link to="/">
            <p>Back to search results</p>
            </Link>
            <Link to={`shopItem/${props.shopItemId}`}>
            <p>Keep Shopping</p>
            </Link>
            <div className="shoppingCartBox">
                <div className="noItemsInCart">

                </div>
                <div className="itemInCart">

                </div>
            </div>  
        </div>
    ); 

}

export default Checkout;