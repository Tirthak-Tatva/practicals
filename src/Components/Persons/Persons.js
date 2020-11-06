import { Component } from 'react';
import { PropTypes } from 'prop-types';

import Person from './Person/Person';
import { withClass as WithClass } from '../../HOC/WithClass';
import classes from './Person/Person.module.css';

class Persons extends Component {
    render() {
        let persons = null;
        if (this.props.showGrid) {
            persons =
                <table>
                    <thead><tr><td>Name</td><td>Age</td></tr></thead>
                    <tbody>
                        {
                            this.props.persons.map((person, index) => {
                                return <tr key={person.id}>
                                    <td>{person.name}</td>
                                    <td>{person.age}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
        }
        else {
            persons = this.props.persons.map((person, index) => {
                return <Person
                    click={() => this.props.click(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.props.change(event, person.id)} />
            });
        }

        persons = this.props.persons.length === 0 ? "No persons found" : persons;

        const assignedClasses = [];
        if (this.props.persons.length === 0) {
            assignedClasses.push(classes.noDataFound)
        }
        return (
            <WithClass className={assignedClasses}>
                {persons}
            </WithClass>
        );
    }
}

Persons.propTypes = {
    change: PropTypes.func,
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number
}

export default Persons;