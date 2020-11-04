import './App.css';
import React, { Component } from 'react';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id:1, name: 'Test1', age: 20 },
      { id:2, name: 'Test2', age: 21 },
      { id:3, name: 'Test3', age: 22 }
    ],
    showPersons: false
  };

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons
    });
  }

  nameChangedHandler = (event, id) => {
    debugger;
    const personIndex = this.state.persons.findIndex(p=> {
      return p.id === id;
    });

    let person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons : persons});
  }
  
  togglePersons = () => {
    debugger;
    const show = this.state.showPersons;
    this.setState({ showPersons: !show });
    console.log(this.state.showPersons);
  }

  //jsx syntax
  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
                return <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}/>
              })
          }
        </div>
      );
    }

    const classes = [];
    if(this.state.persons.length <=2){
      classes.push('red')  // classes = ['red']
    }
    if(this.state.persons.length <=1){
      classes.push('bold')  // classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>I am from app component</h1>
        <p className={classes.join(' ')}>This is working fine</p>
        <button className="button" onClick={this.togglePersons}>Switch name</button>
        {persons}
      </div>
    );

    //jsx syntax compiles to this
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I am React app')); 
  }
}

export default App;
