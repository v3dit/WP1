import React from "react";
//import cx from "classnames"; //npm i classnames
//import ".\components\Card.css"

function Log(){
    return(
        <div className="card" style={{padding: 40,}}>
            <br></br>
            <div className="card-header">
                Coffee1
            </div>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="https://github.com/" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}

export default Log;