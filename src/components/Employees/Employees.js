import React from "react";
import "./style.css";

function Employees(props) {
    return (
        <div className="card-wrap">
            <div className="card">
                <div className="card-image">
                    <img alt={props.firstname} src={props.image}></img>
                </div>
                <div className="content">
                    <ul>
                        <li><strong>Name: </strong>{props.firstname} {props.lastname}</li> 
                        <li><strong>Email: </strong> {props.email}</li> 
                        <li><strong>Phone: </strong> {props.phone}</li> 
                        <li><strong>Date of Birth: </strong> {props.dob}</li>
                    </ul>
                </div>

           </div>
        </div>
    )
};

export default Employees;