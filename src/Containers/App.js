import './App.css';
import React, { Component } from 'react';
import Persons from '../Components/Persons/Persons';
import Button from '../Components/Cockpits/Cockpit';
import Lifecycle from '../Components/Lifecycle/Lifecycle'
// import { ErrorBoundary } from './Components/Errors/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Test1', age: 20 },
      { id: 2, name: 'Test2', age: 21 },
      { id: 3, name: 'Test3', age: 22 }
    ],
    showPersons: false,
    showCockpit: true
  };

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons
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

    this.setState({ persons: persons });
  }

  togglePersons = () => {
    const show = this.state.showPersons;
    this.setState({ showPersons: !show });
  }

  //jsx syntax
  render() {
    let persons = null;
    let animals = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons persons={this.state.persons} click={this.deletePersonHandler} change={this.nameChangedHandler} />
        </div>
      );
    }
    else {
      animals = <Lifecycle title="Life Cycle" />;
    }
    return (
      <div className="App">
        <button onClick={() => { this.setState({ showCockpit: !this.state.showCockpit }) }}>Remove Swicth Button</button>
        {
          this.state.showCockpit
            ? <Button title={this.props.title} togglePersons={this.togglePersons} length={this.state.persons.length} />
            : null
        }
        {persons}
        {animals}
      </div>
    );

    //jsx syntax compiles to this
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I am React app')); 
  }
}

export default App;
