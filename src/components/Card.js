import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, StatusBar} from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { green, blue, red, white } from '../utils/colors';
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
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center'
            }}>
                <Text style={{fontSize: 20}}>{this.props.index}/{this.props.totalCards}</Text>
                <View style={styles.card}>
                    <Text style={{fontSize: 20}}>{this.props.card.question}</Text>
                </View>
                <TextButton style={styles.showAnswerButton} onPress={this.showAnswer}>
                    <MaterialIcons name='flip' size={18}/>  Show answer
                </TextButton>
            </View>:
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center'
            }}>
                <Text style={{fontSize: 20}}>{this.props.index}/{this.props.totalCards}</Text>
                <View style={styles.card}>
                    <Text style={{fontSize: 20}}>{this.props.card.answer}</Text>
                </View>
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


const styles = StyleSheet.create({
    card: {
        width: 300,
        height: 500,
        backgroundColor: 'powderblue',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    showAnswerButton: {
        backgroundColor: blue,
        fontSize: 20,
        borderRadius: 5,
        color: white,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        width: 170
    },
    correctButton: {
        backgroundColor: green,
        fontSize: 20,
        borderRadius: 5,
        color: white,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        width: 130
    },
    incorrectButton: {
        backgroundColor: red,
        fontSize: 20,
        borderRadius: 5,
        color: white,
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

export default Card;