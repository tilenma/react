import React, {useState} from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault(); //prevent default form submit
        
        //input value validation
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return;
        }
        if(+enteredAge < 1){
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            })
            return;
        }

        //log the input to console
        console.log(enteredUsername, enteredAge);

        //update user list by adding new one
        props.onAddUsers(enteredUsername, enteredAge);

        //clear input date after adding
        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const clearErrorHandler = (event) => {
        setError(null);
    }

    return (
        <div>
            <div className={classes.backdrop}>
                {error && <ErrorModal title={error.title} message={error.message} onConfirm={clearErrorHandler} /> }
            </div>
            <div>
                <Card className2={classes.input}>
                    <form onSubmit={addUserHandler}>
                        <label htmlFor="username">Username</label>
                        <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
                        <label htmlFor="age">Age (Years)</label>
                        <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
                        <Button type="submit">Add User</Button>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default AddUser;
