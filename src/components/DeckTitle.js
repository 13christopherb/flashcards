import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import { green, grey, lightGrey, white } from '../utils/colors';


class DeckTitle extends React.Component {

    state={
        editing: false
    }

    handlePress =() => {
        this.props.selectDeck(this.props.deck);
    }

    handleDelete = () => {
        this.props.deleteDeck(this.props.deck);
    }

    render() {
        const containerStyle = this.props.count % 2 === 0 ?
            styles.containerGrey : styles.containerWhite  //Alternate colors

        const cards = this.props.deck.cards ? this.props.deck.cards : [];
        return (
            <View style={containerStyle}>
                {this.props.editing &&
                <TouchableOpacity onPress={this.handleDelete}>
                    <FontAwesome color='#e60000' name='times' size={25}/>
                </TouchableOpacity>}
                <TouchableOpacity style={{flex: 1}} onPress={this.handlePress}>
                    <View style={styles.titleButton}>
                        <MaterialCommunityIcons name='cards-outline' size={40}/>
                        <Text style={{fontSize: 30}}>{this.props.deck.title}</Text>
                        <Text style={{fontSize: 15}}>{cards.length} cards</Text>
                        <FontAwesome name='chevron-right' size={35}/>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default DeckTitle

const styles = StyleSheet.create({
    containerGrey: {
        flex: 1,
        maxHeight: '33%',
        flexDirection: 'row',
        borderBottomWidth: 2.5,
        borderColor: grey,
        backgroundColor: lightGrey
    },
    containerWhite: {
        flex: 1,
        maxHeight: '33%',
        flexDirection: 'row',
        borderBottomWidth: 2.5,
        borderColor: grey,
        backgroundColor: white,
    },
    addCardButton: {
        backgroundColor: green,
        fontSize: 20,
        color: white,
        borderRadius: 7,
        width: 20
    },
    titleButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});
