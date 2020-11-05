import React from 'react';
const Button = (props) => {

    const classes = [];
    if (props.length <= 2) {
        classes.push('red')  // classes = ['red']
    }
    if (props.length <= 1) {
        classes.push('bold')  // classes = ['red', 'bold']
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is working fine</p>
            <button className="button" onClick={props.togglePersons}>Switch</button>
        </div>
    );
}

export default Button;