import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
//import { useForm } from "react-hook-form";

const Reviews = (props) => {

    const [reviews, setReviews] = useState([]);
    //const { register, handleSubmit } = useForm();
    //const [successfulPost, setSuccessfulPost] = useState(false);

    // const { register, handleSubmit, reset, errors } = useForm();
    // const onSubmit = async (formData) => {
    //   const newReview = {
    //     ...formData,
    //     stars: parseInt(formData.stars),
    //   };
    //   const response = await fetch(
    //     `http://www.localhost:3000/reviews`,
    //     {
    //       method: "POST",
    //       body: JSON.stringify(newReview),
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
  
    //   const createdReview = await response.json();
    //   reset();
    //   setReviews([...reviews, createdReview]);
    //   setSuccessfulPost(true);
    //   setTimeout(() => {
    //     setSuccessfulPost(false);
    //   }, 5000);
    // };

    useEffect(() => {

        const getReviews = async () => {
            const response = await fetch(`http://www.localhost:3000/reviews`);
            const reviews = await response.json();
            setReviews(reviews);

        };

        getReviews();

    }, []);

    return (

        <div className="reviewSection">

        {/* {successfulPost && (
            <div
                style={{
                padding: "5px",
                backgroundColor: "lightgreen",
                color: "white",
                fontSize: 20,
                }}
            >
          You've successfully created a review!
        </div>
        )} */}
  
                {reviews.map((review) => {

                    return (

                        <div>
                            <p>{review.stars} stars</p>
                            <p>{review.body}</p>
                        </div>

                    );
                })}

                    {/* <form onSumbit={handleSubmit(onSubmit)}>
                            <label>Stars</label>
                            <input name="stars" type="number" min="1" max="5" ref={register({ required: "Please rate your experience" })}/>
                            <p style={{ color: "red" }}>{errors.text && errors.text.message}</p>
                            <label>Text</label>
                            <input name="body" type="text" ref={register({ required: "You must write a review" })} />
                            <p style={{ color: "red" }}>{errors.text && errors.text.message}</p>
                            <input type="submit" />
                    </form> */}
        </div>

    );


}

export default Reviews;