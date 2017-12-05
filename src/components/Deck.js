import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, StatusBar} from 'react-native';
import {connect} from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import _ from 'underscore';
import * as actions from '../actions/actions';
import TextButton from './TextButton';
import Card from './Card'

class Deck extends React.Component {

    componentDidMount() {
        this.props.dispatch(actions.fetchDeck(this.props.id));
        this.props.dispatch(actions.fetchCards(this.props.id));
    }

    handlePress = () => {
        this.props.navigation.navigate('NewCard', {deckId: this.props.deck.id})
    }

    render() {
        let cards = [];
        if (this.props.cards) {

        for (let i = 0; i < this.props.cards.length; i++) {
            cards.push(<Card id={this.props.cards[i].id}/>);
        }
    }

        return (
            <View>
                <Text>{this.props.deck.title}</Text>
                {cards}
                <TextButton onPress={this.handlePress} style={styles.addCardButton}>
                    <FontAwesome name='plus' size={18}/>
                </TextButton>
            </View>
        );
    }
}

function mapStateToProps({decks, cards}, ownProps) {
    const id = ownProps.navigation.state.params.id;
    return {
        id: id,
        deck: _.filter(decks.decks, (deck) => {
            return id === deck.id;
        })[0],
        cards: cards.cards
    }
}

const styles = StyleSheet.create({
    addCardButton: {
        backgroundColor: '#32CD32',
        fontSize: '20',
        color: '#ffffff',
        borderRadius: 7,
        width: 20
    },

});

export default connect(
    mapStateToProps,
)(Deck)