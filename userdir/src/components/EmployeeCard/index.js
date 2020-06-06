import React from "react";
import "./style.css";

function EmployeeCard(props){
    return (
        <div className="card">
            <div className="content">
                <ul>
                    <li>
                        <strong>Employee Id:</strong> {props.employeeId}
                    </li>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                        <strong>Position:</strong> {props.position}
                    </li>
                    <li>
                        <strong>Role:</strong> {props.role}
                    </li>
                </ul>
            </div>
            <span onClick={() => props.removeUser(props.employeeId)} className="remove">
                x
            </span>
        </div>
    );
}

export default EmployeeCard;