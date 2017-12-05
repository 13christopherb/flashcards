import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, StatusBar} from 'react-native';
import {connect} from 'react-redux';
import _ from 'underscore';
import * as actions from '../actions/actions';

class Deck extends React.Component {

    componentDidMount() {
        this.props.dispatch(actions.fetchDeck(this.props.title));
    }

    render() {
        return (
            <View>
                <Text>{this.props.deck.title}</Text>
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

export default connect(
    mapStateToProps,
)(Deck)