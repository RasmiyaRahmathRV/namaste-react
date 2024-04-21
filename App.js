import React from "react";
import ReactDOM from "react-dom/client";

// React functional component
const title = (
            <h1 className="headingjsx" tabIndex="5">
                Namaste React using JSX
            </h1>
        );


// component inside component
const HeadingComponent2 = () => (
    <div id="container">
        {title}
        <h1 className="headingjsx">Namaste React functional component</h1>
    </div>
    
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2 />);