import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

class DeckTitle extends React.Component {

    handlePress = () => {
        this.props.selectDeck(this.props.deck);
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{flex: 1}} onPress={this.handlePress}>
                    {this.props.count % 2 === 0 ? (
                        <View style={{backGroundColor: '#F5F5F5', flex: 1}}>
                            <Text style={styles.title}>{this.props.deck.title}</Text>
                        </View> ) : ( <View style={{backgroundColor: '#FFFFFF', flex: 1}}>
                        <Text style={styles.title}>{this.props.deck.title}</Text>
                    </View>)}
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
    },
    title: {
        flex: 1,
        maxHeight: '33%',
        justifyContent: 'flex-start'
    }
});

export default DeckTitle;
