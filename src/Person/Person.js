// import { Component } from 'react';
import classes from './Person.module.css';

////functional component
const person = (props) => {
    return (
        <div className={classes.person}>
            <p onClick={props.click}>My name is {props.name} and I am {props.age} years old.</p>
            <input type="text" onChange={props.changed} />
        </div>
    );
}

////class based component
// class Person extends Component{
//     render(){
//         return(
//             <div>
//             <h4>My name is { this.props.name } and I am { this.props.age } years old.</h4>
//             <p>{this.props.children}</p>
//             <p>From person component and i am { Math.ceil(Math.random() * 10) } years old.</p>
//         </div>
//         );
//     }
// }

export default person;