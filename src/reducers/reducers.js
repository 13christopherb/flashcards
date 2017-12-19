import { combineReducers } from 'redux';
import _ from 'underscore';
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
        case actions.ADD_CARD:
            let deck = [];
            var decks = [...state['decks']];
            decks = _.reject(decks, (d) => {
                if (d.id === action.card.deckId) {
                    deck = d;
                    return true;
                } else {
                    return false;
                }
            });
            deck['cards'].push(action.card);
            decks.unshift(deck);
            return {
                ...state,
                ['decks']: decks
            };
        case actions.GET_CARDS:
            return {
                ...state,
                ['cards']: action.cards
            }
        default:
            return state;
    }
}

export default combineReducers({
    decks
});