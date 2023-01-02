import React from "react";

export class UserSignUpPage extends React.Component {
    state = {
        displayName: '',
        username: '',
    };

    onChangeDisplayName = (event) => {
        const value = event.target.value;
        this.setState({displayName: value})
    };
    onChangeUsername = (event) => {
        const value = event.target.value;
        this.setState({username: value})
    };

    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <div>
                    <input placeholder="Your display name"
                           value={this.state.displayName}
                           onChange={this.onChangeDisplayName}
                    />
                </div>
                <div>
                    <input placeholder="Your username"
                           value={this.state.username}
                           onChange={this.onChangeUsername}/>
                </div>
                <div>
                    <input placeholder="Your password" type="password"/>
                </div>
                <div>
                    <input placeholder="Repeat your password" type="password"/>
                </div>
                <div>
                    <button>Sign Up</button>
                </div>
            </div>
        );
    }
}

export default UserSignUpPage;
