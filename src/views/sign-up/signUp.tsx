import React, {useState} from "react";
import { useForm } from 'react-hook-form';
import { FormError } from '../../components';

export const signUpForm = () =>{
    type FormInputs = {
        firstName: "",
        name: "",
    }
    const {register} = useForm<FormInputs>();
    
    async function signUpCallback(){

    }

    return (
        <form className="formSignUp">
            <div className="form-label">
                <label htmlFor="labelSignUp">Create your account</label>
            </div>
            <div className="form-field">
                <div className="form-Name">
                    <label htmlFor="name">Name</label>
                    <input id="name"/>
                </div>
                <div className="form-firstName">
                    <label htmlFor="firstName">Name</label>
                    <input id="firstName"/>
                </div>
                <div className="form-email">
                    <label htmlFor="email">Name</label>
                    <input id="email"/>
                </div>
                <div className="form-username">
                    <label htmlFor="username">Name</label>
                    <input id="username"/>
                </div>
                <div className="form-password">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password"/>
                </div>
                <div className="form-commands">
                    <button className="btn primary" type="submit">
                        sign Up
                    </button>
                </div>
            </div>
        </form>
        
    )
}
export default signUpForm