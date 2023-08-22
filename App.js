import React from "react";
import ReactDOM from "react-dom/client";

// const header = React.createElement("div",{className:"title"},[React.createElement("h1",{},"This is h1."),React.createElement("h2",{},"This is h2."),React.createElement("h3",{},"This is h3.")])
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(header);

// const Header = () => (<div className="title">
//     <h1>This is h1 tag.</h1>
//     <h2>This is h2 tag.</h2>
//     <h3>This is h3 tag.</h3>
// </div>)

// const Otherheader = () =>(
//     <div>
//         <h1>Hello from other copmponent.</h1>
//         <Header/>
//     </div>
// )

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Otherheader/>);


const Header = () => (
                        <div className="header-container">
                            <div className="logo-conatainer">
                                <img className="logo" alt="logo" src="https://png.pngtree.com/png-vector/20190225/ourmid/pngtree-circuit-logo-template-vector-png-image_704226.jpg"></img>
                            </div>
                            <div className="search">
                                Search: <input type="text" placeholder="Search"/>
                            </div>
                            <div className="icons-container">
                                <img className="icons" alt="user-icon" src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"></img>
                            </div>
                        </div>
                    );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>);
