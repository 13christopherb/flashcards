import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function DeckTitle(props) {
    return (
        <View style={styles.container}>
            {props.count % 2 === 0 ? (
                <View style={{backGroundColor: '#F5F5F5', flex: 1}}>
                    <Text style={styles.title}>{props.deck.title}</Text>
                </View> ) : ( <View style={{backgroundColor: '#FFFFFF', flex: 1}}>
                <Text style={styles.title}>{props.deck.title}</Text>
            </View>)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: '33%',
        flexDirection: 'row',
    },
    title: {
        flex: 1,
        maxHeight: '33%',
        justifyContent: 'flex-start'
    }
});
