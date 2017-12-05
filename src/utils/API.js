import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = 'Flashcards:decks'

export async function addDeck (deck) {
    return AsyncStorage.mergeItem('DECK_STORAGE_KEY:' + deck.title, JSON.stringify({
        [deck.title]: deck
    }));
}

export function fetchDeck (title) {
    return AsyncStorage.getItem('DECK_STORAGE_KEY:' + title);
}