import React, { useEffect, useRef } from 'react';
import classes from '../../Containers/App.module.css';
import AuthContext from '../../Context/auth-context';

const Button = (props) => {
    const toggleBtnRef = useRef(null);
    useEffect(() => {
        console.log('useEffect');
        // setTimeout(() => {
        //     console.log('Data saved successfully');
        // }, 1000);
        toggleBtnRef.current.click();
        return () => {
            console.log('Cleanup in useEffect');
        };
    }, []);

    const assignedClasses = [];
    if (props.length <= 2) {
        assignedClasses.push(classes.red)  // classes = ['red']
    }
    if (props.length <= 1) {
        assignedClasses.push(classes.bold)  // classes = ['red', 'bold']
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is working fine</p>
            <button ref={toggleBtnRef} className={classes.button} onClick={props.togglePersons}>Show persons grid</button>
            <AuthContext.Consumer>
                {(context) => <button onClick={context.login}>Login</button>}
            </AuthContext.Consumer>
        </div>
    );
}

export default Button;