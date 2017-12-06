import React from 'react';
import {connect} from 'react-redux';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import * as actions from '../actions/actions';
import TextButton from './TextButton';

class DeckTitle extends React.Component {

    handlePress = () => {
        this.props.selectDeck(this.props.deck);
    }

    handleDelete = () => {
        this.props.dispatch(actions.deleteDeck(this.props.deck));
    }

    render() {

        const titleStyle = this.props.count % 2 === 0 ?
            styles.titleButtonGrey : styles.titleButtonWhite  //Alternate colors

        return (
            <View style={styles.container}>
                <TouchableOpacity style={{flex: 1}} onPress={this.handlePress}>
                    <View style={titleStyle}>
                        <MaterialCommunityIcons name='cards-outline' size={40}/>
                        <Text style={{fontSize: 30}}>{this.props.deck.title}</Text>
                        <TextButton onPress={this.handleDelete} style={styles.addCardButton}>
                            Delete
                        </TextButton>
                        <FontAwesome name='chevron-right' size={35}/>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: '33%',
        flexDirection: 'row',
        borderBottomWidth: 2.5,
        borderColor: '#D3D3D3',
    },
    addCardButton: {
        backgroundColor: '#32CD32',
        fontSize: '20',
        color: '#ffffff',
        borderRadius: 7,
        width: 20
    },
    titleButtonGrey: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
    },
    titleButtonWhite: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
});

export default connect()(DeckTitle)
