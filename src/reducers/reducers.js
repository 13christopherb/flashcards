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
            }
        default:
            return state
    }
}

export default combineReducers({
    decks
});