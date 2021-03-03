import React, {Component} from 'react'

class FilterObject extends Component {
    constructor(){
        super();

        this.state = {
            employees: [
                {
                    name: 'Jimmy Jon',
                    title: 'Hacker',
                    age: 17
                },
                {
                    name: 'Hank Schrader',
                    age: 45,
                    hairColor: 'bald'
                },
                {
                    name: 'Walter White',
                    title: 'Meth King',
                }
            ],

            userInput: '',
            filteredEmployees: []
        }
    }

    handleChange(val) {
        this.setState({ userInput: val });
    }

    filterEmployees(prop){
        let employees = this.state.employees;
        let filteredEmployees2 = [];

        for( let i = 0; i < employees.length; i++){
            if( employees[i].hasOwnProperty(prop)) {
                filteredEmployees2.push(employees[i]);
            }
        }

        this.setState({ filteredEmployees: filteredEmployees2 });
    }

    render(){
        return (
            <div className="puzzleBox filterObjectPB">
                <h4> Filter Object</h4>
                <span className="puzzleText">Original: { JSON.stringify(this.state.employees, null, 10) }</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.filterEmployees(this.state.userInput) }> Filter</button>
                <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredEmployees, null, 10) }</span>
            </div>
            
        )
    }
}

export default FilterObject;