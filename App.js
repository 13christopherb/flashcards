import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import DeckList from "./components/DeckList";
import Deck from './components/Deck'
import { StackNavigator } from 'react-navigation';


export default class App extends React.Component {

    render() {
        return (
            <Stack />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const Stack = StackNavigator({
    Home: {
        screen: DeckList
    },
    Deck: {
        screen: Deck
    }
})