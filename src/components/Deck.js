import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, StatusBar} from 'react-native';
import {connect} from 'react-redux';
import {FontAwesome} from '@expo/vector-icons';
import _ from 'underscore';
import * as actions from '../actions/actions';
import TextButton from './TextButton';
import Card from './Card'

class Deck extends React.Component {

    state = {
        cardIndex: 0,
        quizzing: false,
        score: 0,
    }

    componentDidMount() {
        this.props.dispatch(actions.fetchDeck(this.props.id));
        this.props.dispatch(actions.fetchCards(this.props.id));
    }

    handleCreateCard = () => {
        this.props.navigation.navigate('NewCard', {deckId: this.props.deck.id})
    }

    handleAnswer = (isCorrect) => {
        let score = isCorrect ? this.state.score+1 : this.state.score;
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
            this.props.navigation.navigate('Result', {score: score, title: this.props.deck.title,
                parentScreenKey: this.props.navigation.state.key})
        }
    }

    startQuiz = () => {
        this.setState({
            card: this.props.cards[0],
            quizzing: true
        })
    }

    render() {
        let card = this.props.cards[this.state.cardIndex];
        let cardComponent = card && <Card id={card.id} handleAnswer={this.handleAnswer} score={this.state.score}/>;
        return !this.state.quizzing ?
            <View style={styles.container}>
                <Text>{this.props.deck.title}</Text>
                <TextButton onPress={this.handleCreateCard} style={styles.addCardButton}>
                    <FontAwesome name='plus' size={18}/>
                </TextButton>
                {this.props.cards.length > 0 &&
                    <TextButton onPress={this.startQuiz} style={styles.addCardButton}>
                        Start quiz
                    </TextButton>
                }
            </View>
            : <View>
                {cardComponent}
            </View>
    }
}

function mapStateToProps({decks, cards}, ownProps) {
    const id = ownProps.navigation.state.params.id;
    return {
        id: id,
        deck: _.filter(decks.decks, (deck) => {
            return id === deck.id;
        })[0],
        cards: _.shuffle(cards.cards)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    addCardButton: {
        backgroundColor: '#32CD32',
        fontSize: '20',
        color: '#ffffff',
        borderRadius: 7,
        width: 140
    },

});

export default connect(
    mapStateToProps,
)(Deck)