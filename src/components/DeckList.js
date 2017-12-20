import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, StatusBar} from 'react-native';
import {connect} from 'react-redux';
import {FontAwesome} from '@expo/vector-icons';
import * as actions from '../actions/actions';
import { green, darkBlue, white } from '../utils/colors';
import DeckTitle from './DeckTitle';
import TextButton from './TextButton';

class DeckList extends React.Component {

    state = {
        editing: false
    }

    componentDidMount() {
        this.props.fetchDecks();
    }

    createDeck = (e) => {
        this.props.navigation.navigate('NewDeck');
    }

    deleteDeck = (deck) => {
        this.props.deleteDeck(deck);
        this.setState({
            editing: false
        })
    }

    toggleEdit = (e) => {
        if (this.props.decks.length > 0) {
            this.setState({
                editing: !this.state.editing
            })
        }
    }

    selectDeck = (deck) => {
        this.props.navigation.navigate('Deck', {id: deck.id})
    }

    render() {
        let decks = [];
        if (this.props.decks) {
            for (var i = 0; i < this.props.decks.length; i++) {
                decks.push(<DeckTitle count={i}
                                     deck={this.props.decks[i]}
                                      deleteDeck={this.deleteDeck}
                                      editing={this.state.editing}
                                      selectDeck={this.selectDeck}/>
                )
            }
        }
        return (
            <View style={{flex: 1}}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <TextButton onPress={this.toggleEdit} style={styles.editButton}>
                        Edit
                    </TextButton>
                    {this.state.editing &&
                    <TextButton onPress={this.toggleEdit} style={styles.editButton}>
                        Cancel
                    </TextButton>
                    }
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                }}>
                    {decks}
                </View>
                <View style={{alignItems: 'center'}}>
                    <TextButton onPress={this.createDeck} style={styles.addDeckButton}>
                        <FontAwesome name='plus' size={18}/> Create Deck
                    </TextButton>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    addDeckButton: {
        backgroundColor: green,
        fontSize: 20,
        borderRadius: 5,
        color: white,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        width: 150
    },
    editButton: {
        fontSize: 20,
        borderRadius: 5,
        color: darkBlue,
    }
});

const mapStateToProps = ({ decks: { decks } }) => ({ decks });

export default connect(
    mapStateToProps,
    {
        fetchDecks: actions.fetchDecks,
        deleteDeck: actions.deleteDeck
    }
)(DeckList)