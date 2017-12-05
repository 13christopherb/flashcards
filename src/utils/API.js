import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = 'Flashcards:decks'
const CARD_STORAGE_KEY = 'Flashcards:cards'

export function addDeck (deck) {
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY + ':' + deck.title, JSON.stringify(deck));
}

export function fetchDeck (title) {
    return AsyncStorage.getItem(DECK_STORAGE_KEY + ':' + title);
}

export function addCard (card) {
    return AsyncStorage.mergeItem(CARD_STORAGE_KEY + ':1' + card.deckId + ':' + card.id, JSON.stringify(card));
}