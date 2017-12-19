import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {FontAwesome} from '@expo/vector-icons';
import uuidv4 from 'uuid';
import { green, white } from '../utils/colors';
import * as actions from '../actions/actions';
import TextButton from './TextButton';

class NewCard extends React.Component {

    state = {
        question: '',
        answer: ''
    }

    handleSubmit = (e) => {
        const card = {
            id: uuidv4(),
            deckId: this.props.navigation.state.params.deckId,
            question: this.state.question,
            answer: this.state.answer
        };
        if (this.validInputs()) {
            this.props.dispatch(actions.postCard(card));
            this.props.navigation.goBack();
        } else {
            alert('Please fill out all fields');
        }

    }

    validInputs = () => {
        return this.state.question.length > 0 && this.state.answer.length > 0;
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(question) => this.setState({question})}
                    value={this.state.question}
                />
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(answer) => this.setState({answer})}
                    value={this.state.answer}
                />
                <TextButton onPress={this.handleSubmit} style={styles.addCardButton}>
                    <FontAwesome name='plus' size={18}/> Create Card
                </TextButton>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
    },
    addCardButton: {
        height: 35,
        backgroundColor: green,
        borderRadius: 5,
        fontSize: 20,
        color: white,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        marginLeft: 110,
        marginRight: 110,
    }
});

export default connect()(NewCard)