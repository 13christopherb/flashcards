import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import {connect} from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import DeckTitle from './DeckTitle';

class DeckList extends React.Component {

    handlePress = (e) => {
        this.props.navigation.navigate('NewDeck');
    }

    render () {
        let decks = [];
        for (var i=0; i < this.props.decks.length; i++) {
            decks.push(<DeckTitle deck = {this.props.decks[i]} />)
        }
        return (
            <View style={styles.container}>
                {decks}
                <TouchableOpacity onPress={this.handlePress} style={styles.deckTitle}>
                    <Text style={styles.addDeckButton}><FontAwesome name='plus' size={18} /> Create Deck</Text>
                </TouchableOpacity>
            </View>
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
    deckTitle: {

    },
    addDeckButton: {
        backgroundColor: '#32CD32',
        alignItem: 'center',
        fontSize: '20',
        color: '#ffffff',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5
    }
});

function mapStateToProps({decks}) {
    return {
        decks: decks.decks
    }
}

export default connect(
    mapStateToProps,
)(DeckList)