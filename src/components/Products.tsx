import React from "react";

/**
* Introduction to React Components
* 
* Components are the building blocks of a React application. They allow us to split the UI into
* independent, reusable pieces, making our code more modular and maintainable.
* React components can be written as functions (functional components) or as classes (class components).
* Modern best practices recommend using functional components with Hooks.
*/

interface Product {
    name: string;
    description: string;
    price: string;
    imageUrl: string;
}

const Product: React.FC<Product> = (props) => {
    return (
        <div style={{ border: "1px solid black", margin: "20px", borderRadius: "20px"}}>
            <img src={props.imageUrl} alt={props.name} width={100} height={100}/>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <p>Price: {props.price}</p>
        </div>
    )
}

export default Product