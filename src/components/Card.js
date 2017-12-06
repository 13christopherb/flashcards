import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, StatusBar} from 'react-native';
import {connect} from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import _ from 'underscore';
import * as actions from '../actions/actions';
import TextButton from "./TextButton";

class Card extends React.Component {

    state = {
        showAnswer: false
    }

    handleCorrect = () => {
        this.setState({
            showAnswer: false
        });
        this.props.handleAnswer(true);
    }

    handleIncorrect = () => {
        this.setState({
            showAnswer: false
        });
        this.props.handleAnswer(false);
    }

    showAnswer = () => {
        this.setState({
            showAnswer: true
        });
    }

    render() {
        return !this.state.showAnswer ?
            <View style={styles.container}>
                <Text>{this.props.card.question}</Text>
                <TextButton onPress={this.showAnswer}>Show answer</TextButton>
            </View> :
            <View style={styles.container}>
                <Text>{this.props.card.answer}</Text>
                <TextButton onPress={this.handleCorrect}>Correct</TextButton>
                <TextButton onPress={this.handleIncorrect}>Incorrect</TextButton>
            </View>

    }
}

function mapStateToProps({cards}, ownProps) {
    const id = ownProps.id;
    return {
        id: id,
        card: _.filter(cards.cards, (card) => {
            return id === card.id;
        })[0],
        score: ownProps.score
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default connect(
    mapStateToProps,
)(Card)