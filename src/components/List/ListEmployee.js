import axios from 'axios';
import React from 'react';

export class ListEmployee extends React.Component{
        state = { 
            persons :[]
        }
        componentDidMount(){
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const persons = res.data;
                this.setState({persons});
            })
        }
        render(){
            return (
                <ul>
                    {this.state.persons.map(person => <li>{person.name} </li>)}
                </ul>
            )
        }
}