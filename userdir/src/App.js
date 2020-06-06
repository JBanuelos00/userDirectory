import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import users from "./users.json";

class App extends Component {
    state = {
        users
    };

    removeUser = employeeId => {
       const users = this.state.users.filter(user => user.employeeId !== employeeId);

       this.setState({ users });
    };
    
    render() {
        return (
            <Wrapper>
                <Title>User Directory</Title>
                {this.state.users.map(user => (
                    <EmployeeCard
                        removeUser={this.removeUser}
                        employeeId={user.employeeId}
                        key={user.employeeId}
                        name={user.name}
                        position={user.position}
                        role={user.role}
                    />
                ))}
            </Wrapper>
        );
    }
}

export default App