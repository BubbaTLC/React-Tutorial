import React from "react";

// Functional Components

// function Greet() {
//     return <h1>Hello Bubba</h1>;
// }

const Greet = (props) => {
    const { name, heroName } = props;
    return (
        <div>
            <h1>
                Hello {name} a.k.a {heroName}
            </h1>
        </div>
    );
};

export default Greet;
