import React, {useState, useEffect} from "react";
import './index.css';
import './images/gup_logo.svg';
import './images/gup_logo_text.svg';
import './images/mapMarker.svg';
import './images/solidStar.svg';
import './images/emptyStar.svg';
import './images/halfStar.svg';
import './images/makeFaveShop.svg';
import './images/unFaveShop.svg';
import './images/contactButton.svg';
import './images/shopCart.svg';
import { Link } from "@reach/router";


const Header = (props) => {

    const [shopOwnerInfo, setShopOwnerInfo] = useState([]);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const getJsonOwnerData = async () => {
            const response = await fetch(`http://www.localhost:3000/shopOwner/1`);
            const responseShopOwner = await response.json();
            setShopOwnerInfo(responseShopOwner);
        };

        const getReviews = async () => {
            const response = await fetch(`http://www.localhost:3000/reviews`);
            const reviewsResponse = await response.json();
            setReviews(reviewsResponse);
        };

        getReviews();
        getJsonOwnerData();

    }, []);

    
        //    { const doMath = reviews.map((review) => {
        //     const average = review.stars.reduce((a, b) => (a + b), 0) /review.stars.length;
        //     }
    

    // const starAverageRating = () => {
    //     return getStarValues.reduce((a, b) => (a + b), 0) / getStarValues.length;
    // };

    // const starAveragePush = () => {
    //     const pushMe = shopOwnerInfo.map(() =>{
    //     return {
    //         [...shopOwnerInfo,
    //         starAverageRating]
    //     };
    // })};

    // starAveragePush();


    return (
        <div className="appHeader">
            <div className="logoLeft">
                <Link to="/">
                <img src={window.location.origin + '/images/gup_logo.svg'} alt="growing up rosie logo" className="circleLogo"/>
                </Link>
                <p className="shopOwnerTitle">SHOP OWNER</p>
                <p className="shopOwnerName">{shopOwnerInfo.name}</p>
                <a href="mailto: rosemary.e.meyers@gmail.com"><img src={window.location.origin + '/images/contactButton.svg'} alt="contact button" className="contactButton"/></a>
            </div>
            <div className="headerLeftSide">
                <Link to="/">
                <img src={window.location.origin + '/images/gup_logo_text.svg'} alt="growing up rosie logo" className="textLogo"/>
                </Link>
                <div className="locationLine"><img src={window.location.origin + '/images/mapMarker.svg'} alt="map marker for city, state" className="mapMarker"/>
                <p className="cityState">{shopOwnerInfo.shopLocation}</p></div>

                <div className="salesLine">
                    <p className="saleNumber">0 Sales</p>
                </div>

                <div className="starsLine">
                        
           {reviews.map((review) {
                const shopReviews = [...shopOwnerInfo]
                const getStars = reviews.filter((review) => {review.stars})
                const average = getStars.reduce((a, b) => (a + b), 0) /getStars.length;
                shopReviews = shopOwnerInfo.map((average) => ({...shopReviews, average}))
                return (
                <div>
                    <p className="totalReviewsTally">{shopReviews} {reviews.length}</p>
                </div>
                );
                })
            }

                </div>

                <div className="faveShop">
                    <img src={window.location.origin + '/images/unFaveShop.svg'} alt="Click heart to make this your favorite shop" className="faveShopOpenHeart"/>
                    <p className="faveShopTally">Favorite Shop (0)</p>
                </div>
            </div>

            <Link to="/shoppingCart" className="unstyleLink">
            <div className="headerRightSide">
                <div className="countInCart">
                {props.cartCount} 
                </div>
                <img src={window.location.origin + '/images/shopCart.svg'} alt="shopping cart" className="shopCart"/>
            </div>
            </Link>
        </div>
    );
};

export default Header;