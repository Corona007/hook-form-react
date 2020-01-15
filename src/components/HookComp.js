import React, { useState } from 'react';
import App from '../../../hook-form/src/App';
const HookComp = props => {
    const [ formState, setFormState ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const onChangeHandler = event => {
        event.preventDefault();
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })
    }
    const onSubmitHandler = event => {
        event.preventDefault();
        console.log(formState);
    }
    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>First Name</label>
                <input type="text" name="firstName" onChange={onChangeHandler}/>
                <br/>
                <label>Last Name</label>
                <input type="text" name="lastName" onChange={onChangeHandler}/>
                <br/>
                <label>Email</label>
                <input type="email" name="email" onChange={onChangeHandler}/>
                <br/>
                <label>Password</label>
                <input type="password" name="password" onChange={onChangeHandler}/>
                <br/>
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" onChange={onChangeHandler}/>
                <br/>
                <input type="submit"/>
            </form>
            <h3>First Name:{formState.firstName}</h3>
            <h3>Last Name:{formState.lastName}</h3>
            <h3>Email:{formState.email}</h3>
            <h3>Password:{formState.password}</h3>
            <h3>Confirm Password:{formState.confirmPassword}</h3>
        </div>
    )
}

export default HookComp;