import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = 'Flashcards:decks'

export function addDeck ({ entry, key }) {
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
        [key]: entry
    }))
}