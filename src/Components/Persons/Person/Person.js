import { Component } from 'react';
import classes from './Person.module.css';
// import { ErrorBoundary } from '../../ErrorBoundary';

////functional component
const person = (props) => {
    // const random = Math.random();
    // if(random < 0.5){
    //     return <ErrorBoundary/>;
    //     //throw new Error('There is an error');
    // }
    // else{
    return (
        <div className={classes.person}>
            <p onClick={props.click}>My name is {props.name} and I am {props.age} years old.</p>
            <input type="text" onChange={props.changed} />
        </div>
    );
    // }

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

export class Animal extends Component {
    render() {
        return (
            <p>Animal {this.props.name}</p>
        );
    }
}

export default person;