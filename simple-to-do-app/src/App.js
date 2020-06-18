import React from 'react';
import TodoList from './TodoList';
import './css/App.css'
import Form from './Form'
import {firestore} from './firebase/firebase'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            count: null
        }
    }
    componentDidMount() {
        console.log("Yeah");
        this.getTodosData();
    }
    handleSubmit(e) {
        e.preventDefault()
        const title = e.target.title.value;
        const desc = e.target.desc.value;
        const count = this.state.count;

        firestore.collection('todos').doc(this.state.count.toString()).set({
            id: count,
            title: title,
            desc: desc,
            done: false
        }).then(() => {
            this.getTodosData();
        });

        e.target.title.value = 'たいてゅる';
        e.target.desc.value = 'せえつめい';
    }
    getTodosData() {
        firestore.collection('todos')
            .orderBy('id')
            .get()
            .then(snapShot => {
                let todos = [];
                snapShot.forEach(doc => {
                    console.log(doc.data());
                    todos.push({
                        id: doc.data().id,
                        title: doc.data().title,
                        desc: doc.data().desc,
                        done: doc.data().done
                    });
                });
                this.setState({
                    todos: todos,
                    count: todos.length + 1
                });
            });
    }
    render() {
        return (
            <div className="app">
                <h1>{this.props.user}のToDoリスト</h1>
                <Form handleSubmit={this.handleSubmit.bind(this)} />
                <TodoList
                    todos={this.state.todos}
                />
            </div>
        );
    }
}

export default App