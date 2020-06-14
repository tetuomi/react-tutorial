import React from "react";
import './css/todo.css';
import {firestore} from "./firebase/firebase";

class Todo extends React.Component {
    UpdateData() {
        let TodoRef = firestore.collection('todos').doc(this.props.id.toString());
        TodoRef.update({
            done: !this.props.done
        });
    }

    render() {
        const className = this.props.done ? 'done' : 'undone'
        const link = this.props.done ? '元に戻す' : '完了!'
        return (
            <li className={className}>
                <span>{this.props.id}</span>
                <span>:{this.props.title}  </span>
                <button onClick={() => {this.UpdateData()}}>{link}</button>
                <p>{this.props.desc}</p>
            </li>
        );
    }
}

export default Todo