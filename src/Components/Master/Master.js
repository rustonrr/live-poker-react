import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import { bindActionCreators } from 'redux';
import { updateCommunityCards } from '../../Redux/reducer';
import './Master.css';

class Master extends Component {
    constructor(){
        super();
        this.state = {

        }
        this.triggerDeal = this.triggerDeal.bind(this);
    }

    componentDidMount(){
        this.connectWebSocket();
    }
    
    connectWebSocket() {
        let webSocketReference = this.props.socketReference;
        // event emmited when receiving message 
        webSocketReference.onmessage = (ev) => {
            console.log(ev);
            let data = JSON.parse(ev.data);
            switch(data.type){
                case 'ADD_PLAYER':
                    console.log('player')
                    break;
                default: 
                    // this code gets called when new cards come in
                    this.props.updateCommunityCards(data); 
            }
        }
    }

    triggerDeal() {
        // console.log(this.props);
        let webSocketReference = this.props.socketReference;
        webSocketReference.send(JSON.stringify({
            type: 'DEAL',
            gameCode: this.props.gameCode
        }))
    }

    render() {
        // console.log(this.props);
        let communityCards = this.props.communityCards.map( (e, i) => {
            return <Card key={i} card={e} />
        })
        return (
            <div>
                <div className='community-cards'>
                    {communityCards}
                </div>
                <button onClick={this.triggerDeal} className='deal-new-hand-button'>Deal New Hand</button>
                
            </div>
        );
    }
}

function mapStateToProps(state){
    console.log('map state', state)
    return state;
}

function mapDispatchToProps( dispatch ) {
    return bindActionCreators({ updateCommunityCards }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(Master);