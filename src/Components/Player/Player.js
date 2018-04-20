import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import './Player.css';

class Player extends Component {
    constructor() {
        super();
        this.state = {
            folded: false,
        }
        this.foldHand = this.foldHand.bind(this);
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
    console.log('map state', state)
    return state;
}

export default connect(mapStateToProps)(Player);