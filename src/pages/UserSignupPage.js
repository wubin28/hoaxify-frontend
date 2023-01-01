import React from "react";

export class UserSignUpPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <div>
                    <input placeholder="Your display name" />
                </div>
                <div>
                    <input placeholder="Your username" />
                </div>
            </div>
        );
    }
}

export default UserSignUpPage;
