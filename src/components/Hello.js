import React from "react";

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello Bubbaganoosh</h1>
    //     </div>
    // );
    return React.createElement(
        "div",
        { id: "hello", className: "dumbyClass" },
        React.createElement("h1", null, "Hello Bubs")
    );
};

export default Hello;
