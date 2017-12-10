import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import * as actions from '../actions/actions';
import uuidv4 from 'uuid';
import TextButton from './TextButton';

class NewDeck extends React.Component {

    state = {
        title: ''
    }

    handleSubmit = (e) => {
        const deck = {
            id: uuidv4(),
            title: this.state.title
        };
        if (this.validateInputs()) {
            this.props.dispatch(actions.postDeck(deck));
            this.props.navigation.goBack();
        }
    }

    validateInputs = () => {
        return (this.state.title.length > 0 && this.state.title.length < 20)
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(title) => this.setState({title})}
                    value={this.state.title}
                />
                <TextButton onPress={this.handleSubmit} style={styles.addDeckButton}>
                    <FontAwesome name='plus' size={18}/> Create Deck
                </TextButton>
            </View>
        );
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
        fontSize: 20,
        color: '#ffffff',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        marginLeft: 110,
        marginRight: 110,
    }
});

export default connect()(NewDeck)