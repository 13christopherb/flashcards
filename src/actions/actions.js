import * as API from '../utils/API'

export const ADD_DECK = 'ADD_DECK';
export const GET_DECK = 'GET_DECK';
export const ADD_CARD = 'ADD_CARD';

export function addDeck({id, title }) {
    return {
        type: ADD_DECK,
        deck: {
            id,
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

export function addCard({id, deckId, question, answer}) {
    return {
        type: ADD_CARD,
        card: {
            id,
            deckId,
            question,
            answer
        }
    }
}

export const postCard = (card) => dispatch => {
    API.addCard(card).then(res => {
        dispatch(addCard(card));
    });
}