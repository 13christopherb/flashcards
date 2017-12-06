import * as API from '../utils/API'

export const ADD_DECK = 'ADD_DECK';
export const GET_DECK = 'GET_DECK';
export const GET_DECKS = 'GET_DECKS';
export const REMOVE_DECK = 'REMOVE_DECKS';
export const ADD_CARD = 'ADD_CARD';
export const GET_CARDS = 'GET_CARDS';
export const REMOVE_CARDS = 'REMOVE_CARDS';

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

export const fetchDeck = (id) => dispatch => {
    API.fetchDeck(id).then(res => {
        dispatch(getDeck(res))
    });
}

export function getDecks(decks) {
    return {
        type: GET_DECKS,
        decks: decks
    }
}

export const fetchDecks = () => dispatch => {
    API.fetchDecks().then(res => {
        dispatch(getDecks(res));
    })
}

export function removeDeck(deck) {
    return {
        type: REMOVE_DECK,
        deck: deck
    }
}

export const deleteDeck = (deck) => dispatch => {
    API.deleteDeck(deck.id).then(res => {
        dispatch(deleteCards(deck.id));
        dispatch(removeDeck(deck));
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

export function getCards(cards) {
    return {
        type: GET_CARDS,
        cards: cards
    }
}

export const fetchCards = (deckId) => dispatch => {
    API.fetchCards(deckId).then(cards => {
        dispatch(getCards(cards));
    });
}

export function removeCards(deckId) {
    return {
        type: REMOVE_CARDS,
        deckId: deckId
    }
}

export const deleteCards = (deckId) => dispatch => {
    API.deleteCards(deckId).then(res => {
        dispatch(removeCards(deckId));
    });
}