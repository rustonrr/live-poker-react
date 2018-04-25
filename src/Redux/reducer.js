const initialState = {
    playerCards: [],
    communityCards: [],
    socketReference: null,
    gameCode: null,
    playerList: []
};

const UPDATE_CARDS = 'UPDATE_CARDS';
const UPDATE_COMMUNITY_CARDS = 'UPDATE_COMMUNITY_CARDS';
const SAVE_WEBSOCKET = 'SAVE_WEBSOCKET';
const SAVE_GAME_CODE = 'SAVE_GAME_CODE';
const UPDATE_PLAYER_LIST = 'UPDATE_PLAYER_LIST';

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
        case SAVE_GAME_CODE:
            console.log('save_game_code is firing');
            return Object.assign({}, state, {gameCode: action.payload});
        case UPDATE_PLAYER_LIST:
            console.log('update_player_list is firing');
            return Object.assign({}, state, {playerList: [action.payload, ...state.playerList]})
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

export function saveGameCode(gameCode) {
    return {
        type: SAVE_GAME_CODE,
        payload: gameCode
    }
}

export function updatePlayerList(newPlayer){
    return {
        type: UPDATE_PLAYER_LIST,
        payload: newPlayer
    }
}