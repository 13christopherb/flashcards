import { combineReducers } from 'redux';
import _ from 'underscore';
import * as actions from '../actions/actions';

const initialState = {
    decks: [],
    cards: []
}

function decks(state=initialState, action) {
    switch (action.type) {
        case actions.ADD_DECK:
            var decks = [...state['decks']];
            decks.push(action.deck);
            return {
                ...state,
                ['decks']: decks
            };
        case actions.GET_DECKS:
            return {
                ...state,
                ['decks']: action.decks
            }
        case actions.REMOVE_DECK:
            var decks = [...state['decks']];
            decks = _.reject(decks, (deck) => {
                return deck.id === action.deck.id;
            })
            return {
                ...state,
                ['decks']: decks
            }
        default:
            return state;
    }
}

function cards(state=initialState, action) {
    switch (action.type) {
        case actions.ADD_CARD:
            var cards = [...state['cards']];
            cards.push(action.card);
            return {
                ...state,
                ['cards']: cards
            };
        case actions.GET_CARDS:
            return {
                ...state,
                ['cards']: action.cards
            }
        case actions.REMOVE_CARDS:
            var cards = [...state['cards']];
            cards = _.reject(cards, (card) => {
                return card.deckId === action.deckId;
            })
            return {
                ...state,
                ['cards']: cards
            }
        default:
            return state;
    }
}

export default combineReducers({
    cards,
    decks
});