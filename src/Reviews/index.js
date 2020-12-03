// import React, { useState, useEffect } from "react";
// //import { Link } from "@reach/router";
// //import { useForm } from "react-hook-form";

// const Reviews = (props) => {

//     const [reviews, setReviews] = useState([]);
//     // const [successfulPost, setSuccessfulPost] = useState(false);

//     // const { register, handleSubmit, reset, errors } = useForm();
//     // const onSubmit = async (formData) => {
//     //   const newReview = {
//     //     ...formData,
//     //     stars: parseInt(formData.stars),
//     //   };
//     //   const response = await fetch(`http://www.localhost:3000/reviews`,
//     //     {
//     //       method: "POST",
//     //       body: JSON.stringify(newReview),
//     //       headers: {
//     //         "Content-Type": "application/json",
//     //       },
//     //     }
//     //   );
  
//     //   const createdReview = await response.json();
//     //   reset();
//     //   setReviews([...reviews, createdReview]);
//     //   setSuccessfulPost(true);
//     //   setTimeout(() => {
//     //     setSuccessfulPost(false);
//     //   }, 5000);
//     // };

//     useEffect(() => {

//         const getReviews = async () => {
//             const response = await fetch(`http://www.localhost:3000/reviews`);
//             const reviews = await response.json();
//             setReviews(reviews);

//         };


//         // const createNewReview = async (shopId, stars, text) => {
    
//         //     const newReview = {
//         //         shopId,
//         //         stars,
//         //         text,
//         //     };
        
//         //     await fetch("http://localhost:3000/reviews", {
//         //         method: "POST",
//         //         body: JSON.stringify(newReview),
//         //         headers: {
//         //             Accept: "application/json",
//         //             "Content-Type": "application/json",
//         //         },
//         //     });
//         //     getReviews();
//         //     alert("Thanks for the review!");
//         // };
    
//         // const deleteReview = async (reviewsId) => {
        
//         //     await fetch(`http://localhost:3000/reviews/${reviewsId}`, {
//         //         method: "DELETE"
//         //     });
//         //     getReviews();
//         //     alert("Your review has been deleted");
//         // };

//         // createNewReview();
//         // deleteReview();
//         getReviews();

//     }, []);

//     return (

//         //<div className="reviewSection">

//         // {successfulPost && (
//         //     <div
//         //         style={{
//         //         padding: "5px",
//         //         backgroundColor: "lightgreen",
//         //         color: "white",
//         //         fontSize: 20,
//         //         }}
//         //     >
//         //   You've successfully created a review!
//         // </div>
//         // )}
//         <div>
  
//                 {reviews.map((review) => {

//                     return (

//                         <div>
//                             <p stars={review.stars}>{review.stars} stars</p>
//                             <p text={review.text}>{review.text}</p>
//                         </div>

//                     );
//                 })}

//                     {/* <form onSumbit={handleSubmit(onSubmit)}>
//                             <label>Stars</label>
//                             <input name="stars" type="number" min="1" max="5" ref={register({ required: "Please rate your experience" })}/>
//                             <p style={{ color: "red" }}>{errors.text && errors.text.message}</p>
//                             <label>Text</label>
//                             <input name="text" type="text" ref={register({ required: "You must write a review" })} />
//                             <p style={{ color: "red" }}>{errors.text && errors.text.message}</p>
//                             <input type="submit" />
//                     </form> */}
//         </div>

//     );


// }

// export default Reviews;

import React, { useState, useEffect } from "react";

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
  
                {reviews.map((review) => {

                    return (

                        <div>
                            <p>{review.stars} stars</p>
                            <p>{review.text}</p>
                        </div>

                    );
                })}

        </div>

    );


}

export default Reviews;