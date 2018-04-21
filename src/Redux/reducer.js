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
    ],
    socketReference: null
};

const UPDATE_CARDS = 'UPDATE_CARDS';
const SAVE_WEBSOCKET = 'SAVE_WEBSOCKET';

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_CARDS:
            console.log('update_cards is firing');
            return Object.assign({}, state, {playerCards: action.payload});
        case SAVE_WEBSOCKET:
            console.log('save_websocket is firing');
            return Object.assign({}, state, {socketReference: action.payload});
        default: 
            // console.log('default')
            return state;
    }
}

export function updateCards(newCards) {
    return {
        type: UPDATE_CARDS,
        payload: newCards
    }
}

export function saveWebsocket(ws) {
    return {
        type: SAVE_WEBSOCKET,
        payload: ws
    }
}