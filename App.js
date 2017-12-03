import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import DeckList from "./components/DeckList";

export default class App extends React.Component {

    handlePress = (e) => {
        alert('hello');
    }

    render() {
        return (
            <DeckList/>
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
