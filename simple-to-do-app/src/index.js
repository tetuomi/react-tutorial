import './css/index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App'
import Auth from "./Auth";

class MyRoute extends React.Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Route exact path='/' component={Auth}/>
                        <Route path='/About' component={App}/>
                    </div>
                </Router>
            </div>
        );
    }
}

ReactDOM.render(
    <MyRoute />,
    document.getElementById('root')
)