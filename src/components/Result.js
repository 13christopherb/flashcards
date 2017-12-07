import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';


export default function Result(props) {
    return (
        <View>
            <TouchableOpacity onPress={() => props.navigation.goBack(props.navigation.state.params.parentScreenKey)}>
                <Text>Finished</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.goBack()}><Text>Try Again</Text></TouchableOpacity>
        </View>
    )
}
