const initialState = {
    playerCards: [],
    communityCards: [],
    socketReference: null
};

const UPDATE_CARDS = 'UPDATE_CARDS';
const UPDATE_COMMUNITY_CARDS = 'UPDATE_COMMUNITY_CARDS';
const SAVE_WEBSOCKET = 'SAVE_WEBSOCKET';

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_CARDS:
            console.log('update_cards is firing');
            return Object.assign({}, state, {playerCards: action.payload});
        case UPDATE_COMMUNITY_CARDS:
            console.log('update_community_Cards is firing');
            return Object.assign({}, state, {communityCards: action.payload});
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

export function updateCommunityCards(newCommunityCards) {
    return {
        type: UPDATE_COMMUNITY_CARDS,
        payload: newCommunityCards
    }
}

export function saveWebsocket(ws) {
    return {
        type: SAVE_WEBSOCKET,
        payload: ws
    }
}