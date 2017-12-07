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
            <View>
                <Text>{this.props.card.question}</Text>
                <TextButton onPress={this.showAnswer}>Show answer</TextButton>
            </View> :
            <View>
                <Text>{this.props.card.answer}</Text>
                <View style={styles.resultButtons}>
                    <TextButton onPress={this.handleCorrect} style={styles.correctButton}>
                        <FontAwesome name='check' size={18}/>  Correct
                    </TextButton>
                    <TextButton onPress={this.handleIncorrect} style={styles.incorrectButton}>
                        <FontAwesome name='times' size={18}/>  Incorrect
                    </TextButton>
                </View>
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
    correctButton: {
        backgroundColor: '#32CD32',
        alignItem: 'center',
        fontSize: '20',
        borderRadius: 5,
        color: '#ffffff',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        width: 130
    },
    incorrectButton: {
        backgroundColor: '#e60000',
        alignItem: 'center',
        fontSize: '20',
        borderRadius: 5,
        color: '#ffffff',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        width: 130
    },
    resultButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
});

export default connect(
    mapStateToProps,
)(Card)