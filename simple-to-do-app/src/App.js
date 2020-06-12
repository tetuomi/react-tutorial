import React from 'react';
import TodoList from './TodoList';
import './css/App.css'


class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            todos: [
                {
                    id: 1,
                    title: "Hello, React!",
                    desc: "React始めました",
                    done: true
                },
                {
                    id: 2,
                    title: "Hello, Redux!",
                    desc: "Reduxも始めました",
                    done: false
                },
            ]
        }
    }

    render() {
        return (
            <div className="app">
                <h1>todoアプリを作ってみた</h1>
                <TodoList
                    todos={this.state.todos}
                />
            </div>
        );
    }
}

export default App