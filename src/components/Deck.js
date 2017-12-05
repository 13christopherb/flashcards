import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, StatusBar} from 'react-native';
import {connect} from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import _ from 'underscore';
import * as actions from '../actions/actions';
import TextButton from './TextButton';

class Deck extends React.Component {

    componentDidMount() {
        this.props.dispatch(actions.fetchDeck(this.props.title));
    }

    handlePress = () => {
        this.props.navigation.navigate('NewCard', {deckId: this.props.deck.id})
    }

    render() {
        return (
            <View>
                <Text>{this.props.deck.title}</Text>
                <TextButton onPress={this.handlePress} style={styles.addCardButton}>
                    <FontAwesome name='plus' size={18}/>
                </TextButton>
            </View>
        );
    }
}

function mapStateToProps({decks}, ownProps) {
    const title = ownProps.navigation.state.params.title;
    return {
        title: title,
        deck: _.filter(decks.decks, (deck) => {
            return title === deck.title;
        })[0]
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