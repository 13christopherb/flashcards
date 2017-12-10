import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import TextButton from './TextButton';


export default function Result(props) {
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center'
        }}>
            <Text style={{fontSize: 20}}>Final Score: {props.navigation.state.params.score}</Text>
            <TextButton onPress={() => props.navigation.goBack(props.navigation.state.params.parentScreenKey)}
                        style={styles.finishedButton}>
                <FontAwesome name="check" size={18} />  Finished
            </TextButton>
            <TextButton onPress={() => props.navigation.goBack()}
                        style={styles.retryButton}>
                <FontAwesome name="refresh" size={18} />  Try Again
            </TextButton>
        </View>
    )
}

const styles = StyleSheet.create({
    finishedButton: {
        backgroundColor: '#32CD32',
        alignItem: 'center',
        fontSize: 20,
        borderRadius: 5,
        color: '#ffffff',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        width: 130
    },
    retryButton: {
        backgroundColor: '#6f7fcd',
        alignItem: 'center',
        fontSize: 20,
        borderRadius: 5,
        color: '#ffffff',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        width: 130
    },
});
