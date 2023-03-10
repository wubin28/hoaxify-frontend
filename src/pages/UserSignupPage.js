import React from "react";

export class UserSignUpPage extends React.Component {
    state = {
        displayName: '',
        username: '',
        password: '',
        passwordRepeat: ''
    };

    onChangeDisplayName = (event) => {
        const value = event.target.value;
        this.setState({displayName: value})
    };
    onChangeUsername = (event) => {
        const value = event.target.value;
        this.setState({username: value})
    };
    onChangePassword = (event) => {
        const value = event.target.value;
        this.setState({password: value})
    };
    onChangePasswordRepeat = (event) => {
        const value = event.target.value;
        this.setState({passwordRepeat: value})
    };

    onClickSignUp = () => {
        const user = {
            username: this.state.username,
            displayName: this.state.displayName,
            password: this.state.password
        }
        this.props.actions.postSignUp(user);
    }

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
                           onChange={this.onChangeUsername}
                    />
                </div>
                <div>
                    <input placeholder="Your password"
                           type="password"
                           value={this.state.password}
                           onChange={this.onChangePassword}
                    />
                </div>
                <div>
                    <input placeholder="Repeat your password"
                           type="password"
                           value={this.state.passwordRepeat}
                           onChange={this.onChangePasswordRepeat}
                    />
                </div>
                <div>
                    <button onClick={this.onClickSignUp}>Sign Up</button>
                </div>
            </div>
        );
    }
}

UserSignUpPage.defaultProps = {
    actions: {
        postSignUp: () =>
            new Promise((resolve, reject) => {
                resolve({});
            })
    }
};

export default UserSignUpPage;
