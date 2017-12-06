import {AsyncStorage} from 'react-native';
import _ from 'underscore';

const DECK_STORAGE_KEY = 'Flashcards:decks'
const CARD_STORAGE_KEY = 'Flashcards:cards'

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

export function addCard(card) {
    try {
        let wrapper = {};
        wrapper[card.id] = card;
        let wrappedCard = {};
        wrappedCard[card.deckId] = wrapper;
        return AsyncStorage.mergeItem(CARD_STORAGE_KEY, JSON.stringify(wrappedCard));
    } catch (e) {
        //Handle error
    }

}

export async function fetchCards(deckId) {
    try {
        let response = await AsyncStorage.getItem(CARD_STORAGE_KEY);
        response = JSON.parse(response);
        let cards = Object.keys(response).map(key => {
            return response[key]
        });
        cards = _.filter(cards, card => {
            return card.deckId === deckId;
        });
        return cards;
    } catch (e) {
        //Handle error
    }
}

export async function deleteCards(deckId) {
    try {
        let response = await AsyncStorage.getItem(CARD_STORAGE_KEY);
        let cards = JSON.parse(response);
        cards[deckId] = undefined;
        delete cards[deckId];
        response = await AsyncStorage.setItem(CARD_STORAGE_KEY, JSON.stringify(cards));
        return response;
    }
    catch (e) {
        //Handle error
    }
}