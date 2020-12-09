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
    const [fave, setFave] = useState(0);

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

    const getAverage = (reviews) => {
        let TotalStars = reviews.reduce((prev, curr) => (curr.stars + prev), 0)
        // TotalStars is 3.6666 
        // below use any one of them averageStars
        // let averageStars = Math.round(TotalStars/reviews.length);  // output 4
        // let averageStars = Math.floor(TotalStars/reviews.length);  // output 3
        let averageStars = Math.floor((TotalStars/reviews.length)*10)/10;// output 3.6
        return averageStars;
    };

    const reviewLength = (reviews) => {

            reviews.map((review) => {
                return <p>{review.length}</p>;
            })

    };


    const makeMyFave = (clicked) => {
        if(clicked){
            setFave({
                ...shopOwnerInfo, 
                faveShop: shopOwnerInfo.faveShop + 1
            });

        } else if (!clicked){
            setFave({
                    ...shopOwnerInfo,
                    faveShop: shopOwnerInfo.faveShop - 1
            });

        } else {
            return null;
        }
    };
     

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

                {/* <div className="salesLine">
                    <p className="saleNumber">0 Sales</p>
                </div> */}

                <div className="starsLine">
                    <Link to="/reviews" className="noUnderlineLink">
                        <div>
                            <p className="totalReviewsTally">Average Rating:    {getAverage(reviews)}       ({reviews.length})</p>
                        </div>
                    </Link>
                </div>

                <div className="faveShop" onToggle={() => makeMyFave()}>
                    <img src={window.location.origin + '/images/unFaveShop.svg'} alt="Click heart to make this your favorite shop" className="faveShopOpenHeart"/>
                    <p className="faveShopTally">Favorite Shop ({fave})</p>
                </div>

            </div>
                
            <Link to="/shoppingCart" className="noUnderlineLink">
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