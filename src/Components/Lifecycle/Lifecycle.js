import { Component } from 'react';
import { Animal } from '../Persons/Person/Person';

class Lifecycle extends Component {
    constructor(props) {
        super(props);
        console.log('Lifecycle - Constructor');
        this.state = {
            animals: [{ name: 'Lion', id: 1 }, { name: 'Tiger', id: 2 }]
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Lifecycle - getDerivedStateFromProps', props);
        console.log(state);
        return state;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Lifecycle - shouldComponentUpdate');
        if(nextProps.animals !== this.state.animals){
            return true;
        }
        return false;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Lifecycle - getSnanpshotBeforeUpdate');
        return {message: 'snapshot..'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Lifecycle - componentDidUpdate');
        console.log(snapshot);
    }

    // componentWillMount(){
    //     console.log('Lifecycle - componentWillMount');
    // }

    componentDidMount() {
        console.log('Lifecycle - componentDidMount');
    }

    componentWillUnmount(){
        console.log('Lifecycle - componentWillUnmount')
    }

    inputChangeHandler = (event) => {
        const text = event.target.value;
        let animals = [...this.state.animals];
        animals[0].name = text;
        this.setState({animals: animals});
    }

    render() {
        console.log('Lifecycle - render');
        return (
            <div>
                <h3>{this.props.title}</h3>
                {this.state.animals.map(a => {
                    return <Animal name={a.name} key={a.id} />
                })}
                <input type='text' onChange={this.inputChangeHandler} />
            </div>
        );
    }
}

export default Lifecycle;