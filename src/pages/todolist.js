import React, { Component } from 'react';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            nomTache: '',
            items: []
        };
    }

    onChange(event) {
        this.setState({
            nomTache: event.target.value
        });
    }

    addTodo(event) {
        event.preventDefault();
        this.setState({
            nomTache: '',
            items: [...this.state.items, this.state.nomTache]
        });
    }

    deleteTodo(item) {

        const array = this.state.items;
        const index = array.indexOf(item);
        array.splice(index, 1);
        this.setState({
            items: array
        });
    }

    modifTodo(item) {

        const array = this.state.items;
        const index = array.indexOf(item);
        array(index).setState({
            nomTache: 'test',
            items: [...this.state.items, this.state.nomTache]
        });
        this.setState({
            items: array
        });
    }
    
    renderTodos() {
        return this.state.items.map((item) => {
            return (
                <div key={item}>
                    {item} | <button onClick={this.modifTodo.bind(this, item)}>Modifier</button> | <button onClick={this.deleteTodo.bind(this, item)}>X</button>
                </div>    
            );
        });
    }

    render() {
        return(
            <div>
                <h1>Liste</h1>
                <form>
                    <input 
                        value={this.state.nomTache} 
                        type="text" 
                        onChange={this.onChange.bind(this)}
                    />
                    <button onClick={this.addTodo.bind(this)} >Ajouter</button>
                </form>
                <div>
                    {this.renderTodos()}
                </div>
            </div>
        );
    }
}

export default TodoList;