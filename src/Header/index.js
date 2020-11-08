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
import './images/shopCart.svg';
import './images/emptyCartTab.svg';
import './images/greenTab.svg';


const Header = () => {
    return (
        <div className="appHeader">
        <img src={window.location.origin + '/images/gup_logo.svg'} alt="growing up rosie logo" className="circleLogo"/>
        <img src={window.location.origin + '/images/gup_logo_text.svg'} alt="growing up rosie logo" className="textLogo"/>
        <div className="locationLine"><img src={window.location.origin + '/images/mapMarker.svg'} alt="map marker for city, state" className="mapMarker"/>
        <p className="cityState">Philadelphia, Pennsylvania</p></div>
        <div className="salesStarsLine"><p className="saleNumber">0 Sales        |        </p>
            <div className="averageStarRating">
                <img src={window.location.origin + '/images/emptyStar.svg'} alt="1 star" className="starEmpty"/>
                <img src={window.location.origin + '/images/emptyStar.svg'} alt="1 star" className="starEmpty"/>
                <img src={window.location.origin + '/images/emptyStar.svg'} alt="1 star" className="starEmpty"/>
                <img src={window.location.origin + '/images/emptyStar.svg'} alt="1 star" className="starEmpty"/>
                <img src={window.location.origin + '/images/emptyStar.svg'} alt="1 star" className="starEmpty"/>
            </div>
        </div>
        </div>
    );
};

export default Header;