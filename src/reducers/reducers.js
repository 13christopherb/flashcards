import { combineReducers } from 'redux';
import * as actions from '../actions/actions';

const initialState = {
    decks: [],
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
        default:
            return state;
    }
}

function cards(state=initialState, action) {
    switch (action.type) {
        case actions.addCard:
            var cards = [...state['cards']];
            cards.push(action.card);
            return {
                ...state,
                ['cards']: cards
            };
        default:
            return state;
    }
}

export default combineReducers({
    decks
});