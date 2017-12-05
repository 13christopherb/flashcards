import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, StatusBar} from 'react-native';
import {connect} from 'react-redux';
import {FontAwesome} from '@expo/vector-icons';
import * as actions from '../actions/actions';
import DeckTitle from './DeckTitle';
import TextButton from './TextButton';

class DeckList extends React.Component {

    componentDidMount() {
        this.props.dispatch(actions.fetchDecks());
    }

    handlePress = (e) => {
        this.props.navigation.navigate('NewDeck');
    }

    selectDeck = (deck) => {
        this.props.navigation.navigate('Deck', {id: deck.id})
    }

    render() {
        let decks = [];
        if (this.props.decks) {
            for (var i = 0; i < this.props.decks.length; i++) {
                decks.push(<DeckTitle count={i}
                                      deck={this.props.decks[i]}
                                      selectDeck={this.selectDeck}/>
                )
            }
        }
        return (
            <View style={{flex: 1}}>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                }}>
                    {decks}
                </View>
                <View style={{alignItems: 'center'}}>
                    <TextButton onPress={this.handlePress} style={styles.addDeckButton}>
                        <FontAwesome name='plus' size={18}/> Create Deck
                    </TextButton>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    addDeckButton: {
        backgroundColor: '#32CD32',
        alignItem: 'center',
        fontSize: '20',
        borderRadius: 5,
        color: '#ffffff',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        width: 150
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