import React, { Component } from 'react';
import { saveWebsocket } from '../../Redux/reducer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './LoginPage.css';

class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            userName: '',
            gameCode: ''
        }
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handleGameCodeChange = this.handleGameCodeChange.bind(this);
        this.handleJoinGameSubmit = this.handleJoinGameSubmit.bind(this);
        this.handleNewGameSubmit = this.handleNewGameSubmit.bind(this);
    }

    handleUserNameChange(e) {
        this.setState({
            userName: e.target.value
        })
    }

    handleGameCodeChange(e) {
        this.setState({
            gameCode: e.target.value
        })
    }

    handleNewGameSubmit(e){
        let ws = new WebSocket('ws://10.0.1.8:5000');
        this.props.saveWebsocket(ws);
        ws.onopen = (event) => {
            ws.send(JSON.stringify({
                type: 'CREATE'
            })); 
        };
        // event emmited when receiving message 
        ws.onmessage = (ev) => {
            console.log(ev.data);
            this.props.history.push('/master');
        }
    }

    handleJoinGameSubmit(e){                
        let ws = new WebSocket('ws://10.0.1.8:5000');
        this.props.saveWebsocket(ws);
        ws.onopen = (event) => {
            ws.send(JSON.stringify({
                userName: this.state.userName,
                gameCode: this.state.gameCode,
                type: 'JOIN'
            })); 
        };
        // event emmited when receiving message 
        ws.onmessage = (ev) => {
            console.log(ev.data);
            // check for success first
            this.props.history.push('/player');
        }
    }

    render() {
        // console.log(this.state)
        return (
            <div className='login-page-container'>

                <div className='create-game-container'>
                    <h1>Create Game</h1>
                    <button onClick={this.handleNewGameSubmit} className='create-game-button'>Create</button>
                </div>

                <div className='join-game-container'>
                    <div>
                        <h1>Join Game</h1>
                        <label>
                            User Name:
                            <input onChange={this.handleUserNameChange} placeholder='User Name' type='text' name='User Name' />
                        </label>
                    </div>

                    <div>
                        <label>
                            Game Code:
                            <input onChange={this.handleGameCodeChange} placeholder='Game Code' type='text' name='Game Code' />
                        </label>
                    </div>

                    <button onClick={this.handleJoinGameSubmit} className='join-game-button'>Join</button>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state){
    return state;
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ saveWebsocket }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);