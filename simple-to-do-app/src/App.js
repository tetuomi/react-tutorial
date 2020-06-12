import React from 'react';
import TodoList from './TodoList';
import './css/App.css'
import Form from './Form'


class App extends React.Component {
    constructor(props) {
        super(props)
        const todos = [
            {
                id: 1,
                title: "Hello, React!",
                desc: "React始めました",
                done: false
            },
            {
                id: 2,
                title: "Hello, Redux!",
                desc: "Reduxも始めました",
                done: false
            },
        ]
        this.state = {
            todos: todos,
            countTodo: todos.length + 1,
        }
    }
    handleSubmit(e) {
        e.preventDefault()
        const title = e.target.title.value;
        const desc = e.target.desc.value;
        const todos = this.state.todos.slice();
        const countTodo = this.state.countTodo;

        todos.push({
            id: countTodo,
            title: title,
            desc: desc,
            done: false,
        });
        console.log(todos);

        this.setState({ todos: todos })
        this.setState({ countTodo: countTodo + 1 })

        e.target.title.value = '';
        e.target.desc.value = '';
    }
    render() {
        return (
            <div className="app">
                <h1>todoアプリを作ってみた</h1>
                <Form handleSubmit={this.handleSubmit.bind(this)} />
                <TodoList
                    todos={this.state.todos}
                />
            </div>
        );
    }
}

export default App