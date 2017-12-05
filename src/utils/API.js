import {AsyncStorage} from 'react-native';
import _ from 'underscore';

const DECK_STORAGE_KEY = 'Flashcards:decks'
const CARD_STORAGE_KEY = 'Flashcards:cards'

export function addDeck(deck) {
    let wrappedDeck = {};
    wrappedDeck[deck.id] = deck;
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(wrappedDeck));
}

export async function fetchDeck(id) {
    try {
        let decks = await AsyncStorage.getItem(DECK_STORAGE_KEY);
        decks = JSON.parse(decks);
        let deck = decks[id];
        return deck;
    } catch (e) {
        //Handle error
    }
}

export async function fetchDecks() {
    try {
        let result = await AsyncStorage.getItem(DECK_STORAGE_KEY);
        result = JSON.parse(result);
        let decks = Object.keys(result).map(key => {
            return result[key];
        })
        return decks;
    } catch (e) {
        //Handle error
    }
}

export function addCard(card) {
    let wrapper = {};
    wrapper[card.Id] = card;
    let wrappedCard = {};
    wrappedCard[card.deckId] = {wrapper};
    return AsyncStorage.mergeItem(CARD_STORAGE_KEY, JSON.stringify(wrappedCard));
}

export async function fetchCards(deckId) {
    let cards = [];
    try {
        let response = await AsyncStorage.getItem(CARD_STORAGE_KEY);
        response = JSON.parse(response);
        cards = response[deckId];
        return cards;
    } catch (e) {
        //Handle error
    }
}