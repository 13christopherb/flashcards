import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

class DeckList extends React.Component {

    handlePress = (e) => {
        this.props.navigation.navigate('Deck');
    }

    render () {
        return (
            <View style={styles.container}>
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

export default DeckList;