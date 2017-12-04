import * as API from '../utils/API'

export const ADD_DECK = 'ADD_DECK';

export function addDeck({ title }) {
    return {
        type: ADD_DECK,
        deck: {
            title
        }
    }
}

export const postDeck = (deck) => dispatch => {
    API.addDeck(deck).then(res => {
        dispatch(addDeck(deck));
    });
}