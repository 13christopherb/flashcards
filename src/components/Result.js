import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';


export default function Result(props) {
    return (
        <View>
            <Text>Finished</Text>
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
