import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {FontAwesome} from '@expo/vector-icons';
import _ from 'underscore';
import { green, blue, white } from '../utils/colors';
import * as actions from '../actions/actions';
import TextButton from './TextButton';
import Card from './Card'
import { setLocalNotification, clearLocalNotification} from "../utils/helpers";

class Deck extends React.Component {

    state = {
        cardIndex: 0,
        quizzing: false,
        score: 0,
    }

    componentDidMount() {
        this.props.fetchDeck(this.props.id);
    }

    handleCreateCard = () => {
        this.props.navigation.navigate('NewCard', {deckId: this.props.deck.id})
    }

    /**
     * Called after a user presses on the correct/incorrect buttons in the Card
     * component. The score is changed if the user was correct. If there are
     * more cards remaining, the cardIndex is incremented, and the next card is
     * displayed.
     * @param isCorrect Boolean representing whether or not the user was correct
     */
    handleAnswer = (isCorrect) => {
        let score = isCorrect ? this.state.score + 1 : this.state.score;
        let cardIndex = this.state.cardIndex;
        if (cardIndex < this.props.cards.length - 1) {
            cardIndex++;
            this.setState({
                cardIndex: cardIndex,
                score: score
            });
        } else {
            this.setState({
                score: 0,
                cardIndex: 0,
                quizzing: false
            })
            clearLocalNotification();
            setLocalNotification();
            this.props.navigation.navigate('Result', {
                score: score, title: this.props.deck.title,
                parentScreenKey: this.props.navigation.state.key,
                startQuiz: this.handleStartQuiz
            })
        }
    }

    handleStartQuiz = () => {
        this.setState({
            card: this.props.cards[0],
            quizzing: true
        })
    }

    render() {
        let card = this.props.cards[this.state.cardIndex];
        return !this.state.quizzing ?
            <View style={styles.container}>
                <Text style={{fontSize: 22}}>{this.props.deck.title}</Text>
                <TextButton onPress={this.handleCreateCard} style={styles.addCardButton}>
                    <FontAwesome name='plus' size={18}/> Add Card
                </TextButton>
                {this.props.cards.length > 0 &&
                <TextButton onPress={this.handleStartQuiz} style={styles.startQuizButton}>
                    <FontAwesome name='play' size={18}/> Start quiz
                </TextButton>
                }
            </View>
            :
            <Card card={card}
                  handleAnswer={this.handleAnswer}
                  score={this.state.score}
                  index={this.state.cardIndex + 1}
                  totalCards={this.props.cards.length}/>
    }
}

function mapStateToProps({decks}, ownProps) {
    const id = ownProps.navigation.state.params.id;
    const deck =  _.filter(decks.decks, (deck) => {
        return id === deck.id;
    })[0];
    return {
        id: id,
        deck: deck,
        cards: _.shuffle(deck.cards)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    startQuizButton: {
        backgroundColor: blue,
        fontSize: 20,
        color: white,
        borderRadius: 7,
        width: 140,
        marginBottom: '60%',
    },
    addCardButton: {
        backgroundColor: green,
        fontSize: 20,
        color: white,
        borderRadius: 7,
        width: 140,
        marginTop: '60%'
    }

});

export default connect(
    mapStateToProps,
    {fetchDeck: actions.fetchDeck}
)(Deck)