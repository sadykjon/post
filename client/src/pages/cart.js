import React, { useState, useEffect } from "react";
import { postServices } from "../http/post-services";


const Cart = () => {
    const [image, setImage] = useState([]);

    useEffect(() => {
        const allImage = async () => {
            const data = await postServices.getPost();
            console.log("dataCartItems", data);
            setImage(data.data);
        };
        allImage();
    }, []);

    return (
        <div className="container">
            {image.map((elem, i) => {
                return (
                    <div className="contente" >

                        <img src={elem.image} alt="" />
                        <p>{elem.title}</p>
                        <p>{elem.brand}</p>
                        <p>{elem.category}</p>
                        <p>{elem.description}</p>
                        <p>{elem.price}</p>

                    </div>
                );
            })}
        </div>
    );
};

export default Cart;