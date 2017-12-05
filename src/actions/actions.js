import * as API from '../utils/API'

export const ADD_DECK = 'ADD_DECK';
export const GET_DECK = 'GET_DECK';

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

export function getDeck(deck) {
    return {
        type: GET_DECK,
        deck: deck
    }
}

export const fetchDeck = (title) => dispatch => {
    API.fetchDeck(title).then(res => {
        dispatch(getDeck(res))
    });
}