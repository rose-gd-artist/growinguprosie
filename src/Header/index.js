import React from "react";
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
import './images/emptyCartTab.svg';
import './images/greenTab.svg';


const Header = () => {
    return (
        <div className="appHeader">
            <div className="logoLeft">
                <img src={window.location.origin + '/images/gup_logo.svg'} alt="growing up rosie logo" className="circleLogo"/>
                <p className="shopOwnerTitle">SHOP OWNER</p>
                <p className="shopOwnerName">Rosemary Meyers</p>
                <img src={window.location.origin + '/images/contactButton.svg'} alt="contact button" className="contactButton"/>
            </div>
            <div className="headerLeftSide">

                <img src={window.location.origin + '/images/gup_logo_text.svg'} alt="growing up rosie logo" className="textLogo"/>
                <div className="locationLine"><img src={window.location.origin + '/images/mapMarker.svg'} alt="map marker for city, state" className="mapMarker"/>
                <p className="cityState">Philadelphia, Pennsylvania</p></div>

                <div className="salesLine">
                    <p className="saleNumber">0 Sales</p>
                </div>

                <div className="starsLine">
                    <div className="averageStarRating">
                        <img src={window.location.origin + '/images/emptyStar.svg'} alt="1 Empty star" className="starEmpty"/>
                        <img src={window.location.origin + '/images/emptyStar.svg'} alt="1 Empty star" className="starEmpty"/>
                        <img src={window.location.origin + '/images/emptyStar.svg'} alt="1 Empty star" className="starEmpty"/>
                        <img src={window.location.origin + '/images/emptyStar.svg'} alt="1 Empty star" className="starEmpty"/>
                        <img src={window.location.origin + '/images/emptyStar.svg'} alt="1 Empty star" className="starEmpty"/>
                    </div>
                    <p className="totalReviewsTally">(0)</p>
                </div>

                <div className="faveShop">
                    <img src={window.location.origin + '/images/unFaveShop.svg'} alt="Click heart to make this your favorite shop" className="faveShopOpenHeart"/>
                    <p className="faveShopTally">Favorite Shop (0)</p>
                </div>
            </div>

        <div className="headerRightSide">
            {/* <p className="shopOwnerTitle">Shop Owner</p>
            <p className="shopOwnerName">Rosemary Meyers</p>
            <img src={window.location.origin + '/images/contactButton.svg'} alt="contact button" className="contactButton"/> */}
            
            <img src={window.location.origin + '/images/shopCart.svg'} alt="shopping cart" className="shopCart"/>
            </div>
        </div>
    );
};

export default Header;