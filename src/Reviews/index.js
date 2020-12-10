import React, { useState, useEffect } from "react";
import "./index.css";

const Reviews = (props) => {


    const [shopOwner, setShopOwner] = useState({});
    const [reviews, setReviews] = useState([]);

    useEffect(() => {

        const getShopOwnerInfo = async () => {
            const response = await fetch("http://www.localhost:3000/shopOwner");
            const responseShopOwnerInfo = await response.json();
            setShopOwner(responseShopOwnerInfo);

        };

        const getReviews = async () => {
            const response = await fetch(`http://www.localhost:3000/reviews`);
            const reviews = await response.json();
            setReviews(reviews);

        };

        getShopOwnerInfo();
        getReviews();

    }, []);


    return (

        <div className="reviewSection">

            <p className="reviewHeader">Reviews</p>

                <div className="dividerLine"></div>
  
                {reviews.map((review) => {

                    return (

                        <div className="reviewBox">
                            <p className="reviewStars">{review.stars} stars</p>
                            <p className="reviewText">{review.text}</p>
                        </div>

                    );
                })}

        </div>

    );


}

export default Reviews;