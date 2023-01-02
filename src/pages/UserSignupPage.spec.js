import React from "react";
import {fireEvent, render} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import {UserSignUpPage} from './UserSignupPage';

describe('UserSignUpPage', () => {
    describe('Layout', () => {
        it('has header of Sign Up', () => {
            const {container} = render(<UserSignUpPage/>);
            const header = container.querySelector('h1');
            expect(header).toHaveTextContent('Sign Up');
        });
        it('has input for display name', () => {
            const {queryByPlaceholderText} = render(<UserSignUpPage/>);
            const displayNameInput = queryByPlaceholderText('Your display name');
            expect(displayNameInput).toBeInTheDocument();
        });
        it('has input for username', () => {
            const {queryByPlaceholderText} = render(<UserSignUpPage/>);
            const usernameInput = queryByPlaceholderText('Your username');
            expect(usernameInput).toBeInTheDocument();
        });
        it('has input for password', () => {
            const {queryByPlaceholderText} = render(<UserSignUpPage/>);
            const passwordInput = queryByPlaceholderText('Your password');
            expect(passwordInput).toBeInTheDocument();
        });
        it('has password type for password input', () => {
            const {queryByPlaceholderText} = render(<UserSignUpPage/>);
            const passwordInput = queryByPlaceholderText('Your password');
            expect(passwordInput.type).toBe('password');
        });
        it('has input for password repeat', () => {
            const {queryByPlaceholderText} = render(<UserSignUpPage/>);
            const passwordInputRepeat = queryByPlaceholderText('Repeat your password');
            expect(passwordInputRepeat).toBeInTheDocument();
        });
        it('has password type for password repeat input', () => {
            const {queryByPlaceholderText} = render(<UserSignUpPage/>);
            const passwordRepeat = queryByPlaceholderText('Repeat your password');
            expect(passwordRepeat.type).toBe('password');
        });
        it('has submit button', () => {
            const {container} = render(<UserSignUpPage/>);
            const button = container.querySelector('button');
            expect(button).toBeInTheDocument()
        })
    });
    describe('Interactions', () => {
        const changeEvent = (content) => {
            return {
                target: {
                    value: content
                }
            };
        };

        it('sets the displayName value into state', () => {
            const {queryByPlaceholderText} = render(<UserSignUpPage/>);
            const displayNameInput = queryByPlaceholderText('Your display name');

            fireEvent.change(displayNameInput, changeEvent('my-display-name'));

            expect(displayNameInput).toHaveValue('my-display-name');
        });
        it('sets the username value into state', () => {
            const {queryByPlaceholderText} = render(<UserSignUpPage/>);
            const usernameInput = queryByPlaceholderText('Your username');

            fireEvent.change(usernameInput, changeEvent('my-user-name'));

            expect(usernameInput).toHaveValue('my-user-name');
        });
        it('sets the password value into state', () => {
            const {queryByPlaceholderText} = render(<UserSignUpPage/>);
            const passwordInput = queryByPlaceholderText('Your password');

            fireEvent.change(passwordInput, changeEvent('P4ssword'));

            expect(passwordInput).toHaveValue('P4ssword');
        });
        it('sets the password repeat value into state', () => {
            const {queryByPlaceholderText} = render(<UserSignUpPage/>);
            const passwordRepeat = queryByPlaceholderText('Repeat your password');

            fireEvent.change(passwordRepeat, changeEvent('P4ssword'));

            expect(passwordRepeat).toHaveValue('P4ssword');
        });
        it('calls postSignUp when the fields are valid and the actions are provided in props', () => {
            const actions = {
                postSignUp: jest.fn().mockResolvedValueOnce({})
            }
            const {container, queryByPlaceholderText} = render(<UserSignUpPage actions={actions}/>);

            const displayNameInput = queryByPlaceholderText('Your display name');
            const usernameInput = queryByPlaceholderText('Your username');
            const passwordInput = queryByPlaceholderText('Your password');
            const passwordRepeat = queryByPlaceholderText('Repeat your password');

            fireEvent.change(displayNameInput, changeEvent('my-display-name'));
            fireEvent.change(usernameInput, changeEvent('my-user-name'));
            fireEvent.change(passwordInput, changeEvent('P4ssword'));
            fireEvent.change(passwordRepeat, changeEvent('P4ssword'));

            const button = container.querySelector('button');
            fireEvent.click(button);

            expect(actions.postSignUp).toHaveBeenCalledTimes(1);
        })
    });
});