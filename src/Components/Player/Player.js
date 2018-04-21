import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import { updateCards } from '../../Redux/reducer';
import { bindActionCreators } from 'redux';
import './Player.css';

class Player extends Component {
    constructor() {
        super();
        this.state = {
            folded: false,
        }
        this.foldHand = this.foldHand.bind(this);
    }
    
    componentDidMount(){
        this.connectWebSocket();
    }
    
    connectWebSocket() {
        let webSocketReference = this.props.socketReference;
        // event emmited when receiving message 
        webSocketReference.onmessage = (ev) => {
            console.log(ev);
            // set cards in reducer 
            this.props.updateCards(JSON.parse(ev.data));
        }
    }
    
    foldHand(){
        this.setState({
            folded: true
        })
    }

    render() {
        let displayCards = this.props.playerCards.map( (e, i) => {
            return <Card key={i} card={e} />
        })
        return (
            <div>
                <div hidden={this.state.folded}>
                    <div className='player-cards'>
                        {displayCards}
                    </div>
                    <button onClick={this.foldHand} className='fold-button'>Fold</button>
                </div>
                <div hidden={!this.state.folded}>Your Hand Was Folded</div>
            </div>
        );
    }
}

function mapStateToProps(state){
    console.log(state);
    return state;
}

function mapDispatchToProps( dispatch ) {
    return bindActionCreators({ updateCards }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);