import React from 'react';
import { Text, View } from 'react-native';

export default function DeckTitle(props) {
    return (
        <View>
            <Text>{props.deck.title}</Text>
        </View>
    )
}