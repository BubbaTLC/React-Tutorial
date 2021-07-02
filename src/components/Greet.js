import React from "react";

// Functional Components

// function Greet() {
//     return <h1>Hello Bubba</h1>;
// }

const Greet = (props) => {
    return (
        <div>
            <h1>
                Hello {props.name} a.k.a {props.heroName}
            </h1>
            {props.children}
        </div>
    );
};

export default Greet;
