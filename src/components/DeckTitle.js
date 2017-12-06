import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';


export default function DeckTitle(props) {

    const handlePress = function() {
        props.selectDeck(props.deck);
    }

    const handleDelete = function() {
        props.deleteDeck(props.deck);
    }

    const containerStyle = props.count % 2 === 0 ?
        styles.containerGrey : styles.containerWhite  //Alternate colors

    return (
        <View style={containerStyle}>
            {props.editing &&
            <TouchableOpacity onPress={handleDelete}>
                <FontAwesome color='#e60000' name='times' size={25}/>
            </TouchableOpacity>}
            <TouchableOpacity style={{flex: 1}} onPress={handlePress}>
                <View style={styles.titleButton}>
                    <MaterialCommunityIcons name='cards-outline' size={40}/>
                    <Text style={{fontSize: 30}}>{props.deck.title}</Text>
                    <FontAwesome name='chevron-right' size={35}/>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    containerGrey: {
        flex: 1,
        maxHeight: '33%',
        flexDirection: 'row',
        borderBottomWidth: 2.5,
        borderColor: '#D3D3D3',
        backgroundColor: '#DCDCDC'
    },
    containerWhite: {
        flex: 1,
        maxHeight: '33%',
        flexDirection: 'row',
        borderBottomWidth: 2.5,
        borderColor: '#D3D3D3',
        backgroundColor: '#FFFFFF',
    },
    addCardButton: {
        backgroundColor: '#32CD32',
        fontSize: '20',
        color: '#ffffff',
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
