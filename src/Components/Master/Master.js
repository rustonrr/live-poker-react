import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import './Master.css';

class Master extends Component {
    render() {
        let communityCards = this.props.communityCards.map( (e, i) => {
            return <Card key={i} card={e} />
        })
        return (
            <div>
                <div className='community-cards'>
                    {communityCards}
                </div>
                <button className='deal-new-hand-button'>Deal New Hand</button>
            </div>
        );
    }
}

function mapStateToProps(state){
    console.log('map state', state)
    return state;
}

export default connect(mapStateToProps)(Master);