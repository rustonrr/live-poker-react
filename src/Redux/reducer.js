const initialState = {
    playerCards: [
        {
            suit: 'heart',
            value: 'A'
        },
        {
            suit: 'diamond',
            value: 'A'
        }
    ],
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

export default function reducer(state = initialState, action) {
    return state;
}