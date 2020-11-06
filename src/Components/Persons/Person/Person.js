import React, { Component } from 'react';
import classes from './Person.module.css';
import Aux from '../../../HOC/Auxiliary';
import AuthContext from '../../../Context/auth-context';
// import { ErrorBoundary } from '../../ErrorBoundary';

////functional component
class Person extends Component {
    // const random = Math.random();
    // if(random < 0.5){
    //     return <ErrorBoundary/>;
    //     //throw new Error('There is an error');
    // }
    // else{

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }
    componentDidMount() {
        //document.querySelector('input').focus();  //focus on the first input ele
        // this.inputElement.focus();  // focus on the last ele
        this.inputElementRef.current.focus();   // focus on the last ele
    }

    render() {
        return (
            <Aux>
                <div className={classes.person}>
                    <AuthContext.Consumer>
                        {(context) =>
                            context.authenticated ? <p>Authenitcated..</p> : <p>Please Login</p>}
                    </AuthContext.Consumer>

                    <p onClick={this.props.click}>My name is {this.props.name} and I am {this.props.age} years old.</p>
                    <input
                        type="text"
                        onChange={this.props.changed}
                        //ref={(inputEle) => {this.inputElement = inputEle}}
                        ref={this.inputElementRef}
                        value={this.props.name} />
                </div>
                {//<div key="k2">Adjacent JSX Element</div> //wrap elements in array [ele1, ele2] and give each element a unique key
                }
            </Aux>
        );
    }

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

export default Person;