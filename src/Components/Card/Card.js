import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    constructor() {
        super();
        this.state = {
            hideCard: true
        }
        this.toggleHideCard = this.toggleHideCard.bind(this);
    }

    componentWillReceiveProps(){
        this.setState({
            hideCard: true
        })
    }

    toggleHideCard(){
        this.setState({
            hideCard: !this.state.hideCard
        })
    }

    render() {
        return (
            <div onClick={this.toggleHideCard} className='singleCard'>
                <div hidden={this.state.hideCard}>
                    {this.props.card.value} of {this.props.card.suit}s
                </div>
            </div>
        );
    }
}

export default Card;