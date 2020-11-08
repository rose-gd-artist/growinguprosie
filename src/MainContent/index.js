import React from "react";
import './index.css';

const MainContent = () => {
    return (
        <div className="contentPage">
            <div className="indexItem">
                <img src={window.location.origin + '/images/10FingersPic.jpg'} alt="1o Fingers 10 Toes I'm Good Onesie Index Page Picture" className="indexPic"/>
            </div>
            <div className="indexItem">
                <img src={window.location.origin + '/images/10FingersPic.jpg'} alt="1o Fingers 10 Toes I'm Good Onesie Index Page Picture" className="indexPic"/>
            </div>
            <div className="indexItem">
                <img src={window.location.origin + '/images/10FingersPic.jpg'} alt="1o Fingers 10 Toes I'm Good Onesie Index Page Picture" className="indexPic"/>
            </div>
        </div>

    );
};

export default MainContent;