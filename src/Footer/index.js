import React from "react";
import './index.css';

const Footer = () => {
    return (
        <div className="footerBox">
            <div className="footerLinksDiv">
                <p className="footerContact">Contact</p>
                <p className="footerShopPolicies">Shop Policies</p>
                <p className="footerShipping">Shipping</p>
                <p className="footerPayments">Payment Options</p>
                <p className="footerReturnsExchanges">Returns and Exchanges</p>
            </div>
            <p className="footerInfo">All content is the property of growing up rosie copyright 2020.</p>
        </div>
    );
};

export default Footer; 