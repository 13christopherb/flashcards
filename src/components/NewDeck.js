import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import * as actions from '../actions/actions';

class NewDeck extends React.Component {

    state = {
        title: ''
    }

    handleSubmit = (e) => {
        const deck = {
            title: this.state.title
        };
        this.props.dispatch(actions.postDeck(deck));
        //this.props.navigation.goBack();
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(title) => this.setState({title})}
                    value={this.state.title}
                />
                <TouchableOpacity onPress={this.handleSubmit} style={styles.deckTitle}>
                    <Text style={styles.addDeckButton}><FontAwesome name='plus' size={18} /> Create Deck</Text>
                </TouchableOpacity>
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

export default connect()(NewDeck)