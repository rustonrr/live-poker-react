const initialState = {
    playerCards: [],
    communityCards: [
        {
            suit: 'spade',
            value: 'A'
        },
        {
            suit: 'club',
            value: 'A'
        },
        {
            suit: 'heart',
            value: 'K'
        },
        {
            suit: 'diamond',
            value: 'Q'
        },
        {
            suit: 'club',
            value: 'J'
        }
    ]
};

const UPDATE_CARDS = 'UPDATE_CARDS';

export default function reducer(state = initialState, action) {
    console.log('wtf');
    switch (action.type) {
        case UPDATE_CARDS:
            console.log('update_cards is firing');
            return Object.assign({}, state, {playerCards: action.payload});
        default: 
            console.log('default')
            return state;
    }
}

export function updateCards(newCards) {
    console.log(newCards);
    return {
        type: UPDATE_CARDS,
        payload: newCards
    }
}