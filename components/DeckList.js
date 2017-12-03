import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';

class DeckList extends React.Component {

    handlePress = (e) => {
        alert('hello');
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.handlePress}><Text>Test</Text></TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default DeckList;