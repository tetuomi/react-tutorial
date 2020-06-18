import React, { Component } from 'react'
import App from './App'
import firebase from "firebase";
class Auth extends Component {
    state = {
        user: null
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ user })
        })
    }
    //componentDidMountはrenderが実行された後に行われる。データの受け渡しが可能な状態になったら下記のコードが実行されていく。
    //onAuthstateChangeでuserにログインしたユーザーの情報を与える

    login() {
        // Using a popup.
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
        });
    }
    //signInWithRedirectでGoogleのログインページに接続して、Google プロバイダ オブジェクトのインスタンスを作成する。
    logout() {
        firebase.auth().signOut()
    }

    render() {
        return (
            <div className="Auth">
                {this.state.user ? (
                    <App user={this.state.user && this.state.user.displayName} />
                ) : (
                    <h1 className="Name">Simple To Do App</h1>
                    //ログインしていない人用の表示
                )}
                {this.state.user ? (
                    null
                ) : (
                    <button onClick={this.login}>Google Login</button>
                    //ユーザーがいない時はloginボタンを表示する
                )}
            </div>
        )
    }
}

export default Auth