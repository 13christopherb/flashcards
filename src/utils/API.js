import {AsyncStorage} from 'react-native';
import _ from 'underscore';

const DECK_STORAGE_KEY = 'Flashcards:decks'

export function addDeck(deck) {
    try {
        let wrappedDeck = {};
        wrappedDeck[deck.id] = deck;
        return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(wrappedDeck));
    } catch (e) {
        //Handle error
    }
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
        let response = await AsyncStorage.getItem(DECK_STORAGE_KEY);
        response = JSON.parse(response);
        let decks = Object.keys(response).map(key => {
            return response[key];
        })
        return decks;
    } catch (e) {
        //Handle error
    }
}

export async function deleteDeck(id) {
    try {
        let response = await AsyncStorage.getItem(DECK_STORAGE_KEY);
        let decks = JSON.parse(response);
        decks[id] = undefined;
        delete decks[id];
        response = await AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks));
        return response;
    } catch (e) {
        //Handle error
    }
}

export async function addCard(card) {
    try {
        let deck = await fetchDeck(card.deckId);
        deck['cards'].push(card);
        let wrapper = {};
        wrapper[card.deckId] = deck;
        return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(wrapper));
    } catch (e) {
        //Handle error
    }

}

export async function fetchCards(deckId) {
    try {
        let response = await AsyncStorage.getItem(DECK_STORAGE_KEY);
        response = JSON.parse(response);
        let cards = response[deckId]['cards'];
        return Object.keys(cards).map(key => {
            return cards[key]
        });
    } catch (e) {
        //Handle error
    }
}

export async function deleteCards(card) {
    try {
        let response = await fetchDeck(card.deckId);
        let deck = JSON.parse(response);
        deck['cards'] = _.reject(deck['cards'], (c) => {
            return card.id === c.id;
        });
        response = await AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(deck));
        return response;
    }
    catch (e) {
        //Handle error
    }
}