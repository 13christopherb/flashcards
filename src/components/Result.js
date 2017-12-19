import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import { green, blue, white } from '../utils/colors';
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
            <TextButton onPress={() => props.navigation.goBack()}
                        style={styles.finishedButton}>
                <FontAwesome name="check" size={18} />  Finished
            </TextButton>
            <TextButton onPress={() => {
                props.navigation.state.params.startQuiz();
                props.navigation.goBack();}}
                        style={styles.retryButton}>
                <FontAwesome name="refresh" size={18} />  Try Again
            </TextButton>
        </View>
    )
}

const styles = StyleSheet.create({
    finishedButton: {
        backgroundColor: green,
        fontSize: 20,
        borderRadius: 5,
        color: white,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        width: 130
    },
    retryButton: {
        backgroundColor: blue,
        fontSize: 20,
        borderRadius: 5,
        color: white,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        width: 130
    },
});
