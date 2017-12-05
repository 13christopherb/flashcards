import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, StatusBar} from 'react-native';
import {connect} from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import _ from 'underscore';
import * as actions from '../actions/actions';

class Card extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.card.question}</Text>
            </View>
        );
    }
}

function mapStateToProps({cards}, ownProps) {
    const id = ownProps.id;
    return {
        id: id,
        card: _.filter(cards.cards, (card) => {
            return id === card.id;
        })[0],
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    addDeckButton: {
        height: 35,
        backgroundColor: '#32CD32',
        alignItem: 'center',
        borderRadius: 5,
        fontSize: '20',
        color: '#ffffff',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        marginLeft: 110,
        marginRight: 110,
    }
});

export default connect(
    mapStateToProps,
)(Card)