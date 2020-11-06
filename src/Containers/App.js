import React, { Component } from 'react';

import classes from './App.module.css';
import Persons from '../Components/Persons/Persons';
import Button from '../Components/Cockpits/Cockpit';
import Lifecycle from '../Components/Lifecycle/Lifecycle'
import { hocClass as HocClass } from '../HOC/WithClass';
import Aux from '../HOC/Auxiliary';
import AuthContext from '../Context/auth-context';
// import { ErrorBoundary } from './Components/Errors/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Test1', age: 20 },
      { id: 2, name: 'Test2', age: 21 },
      { id: 3, name: 'Test3', age: 22 }
    ],
    showGrid: false,
    showCockpit: true,
    counter: 0,
    authenticated: false
  };

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState((prevState, props) => {
      return {
        persons: persons
      }
    });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    let person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons,
        counter: prevState.counter + 1
      };
    });
    console.log(this.state.counter);
  }

  togglePersons = () => {
    this.setState((prevState, props) => {
      return { showGrid: !prevState.showGrid }
    });
  }

  loginHandler = () => {
    this.setState({ authenticated: true });
  }

  //jsx syntax
  render() {
    return (
      <Aux>
        <button onClick={() => { this.setState({ showCockpit: !this.state.showCockpit }) }}>Remove Switch Button</button>
        {
          this.state.showCockpit
            ?
            <AuthContext.Provider
              value={{
                authenticated: this.state.authenticated,
                login: this.loginHandler
              }}>
              <Button
                title={this.props.title}
                togglePersons={this.togglePersons}
                length={this.state.persons.length} />
              <Persons
                showGrid={this.state.showGrid}
                persons={this.state.persons}
                click={this.deletePersonHandler}
                change={this.nameChangedHandler} />
            </AuthContext.Provider>
            : null
        }

        <Lifecycle title="Life Cycle" />
      </Aux>
    );

    //jsx syntax compiles to this
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I am React app')); 
  }
}

export default HocClass(App, classes.App);
