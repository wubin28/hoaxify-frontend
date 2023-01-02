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

        let button, displayNameInput, usernameInput, passwordInput, passwordRepeat;

        const setupForSubmit = (props) => {
            const rendered = render(<UserSignUpPage {...props}/>);

            const {container, queryByPlaceholderText} = rendered;

            displayNameInput = queryByPlaceholderText('Your display name');
            usernameInput = queryByPlaceholderText('Your username');
            passwordInput = queryByPlaceholderText('Your password');
            passwordRepeat = queryByPlaceholderText('Repeat your password');

            fireEvent.change(displayNameInput, changeEvent('my-display-name'));
            fireEvent.change(usernameInput, changeEvent('my-user-name'));
            fireEvent.change(passwordInput, changeEvent('P4ssword'));
            fireEvent.change(passwordRepeat, changeEvent('P4ssword'));

            button = container.querySelector('button');

            return rendered;
        }

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

            setupForSubmit({actions});

            fireEvent.click(button);

            expect(actions.postSignUp).toHaveBeenCalledTimes(1);
        });
        it('does not throw exception when clicking the button when actions not provided in props', () => {
            const {container, queryByPlaceholderText} = setupForSubmit();
            expect(() => fireEvent.click(button)).not.toThrow();
        });
        it('calls post when user body when the fields are valid', () => {
            const actions = {
                postSignUp: jest.fn().mockResolvedValueOnce({})
            }
            setupForSubmit({actions});
            fireEvent.click(button);
            const expectedUserObject = {
                username: 'my-user-name',
                displayName: 'my-display-name',
                password: 'P4ssword'
            }

            expect(actions.postSignUp).toHaveBeenCalledWith(expectedUserObject);
        });
    });
});