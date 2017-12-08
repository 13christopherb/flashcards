import React from 'react';
import {Animated, Text, View, StyleSheet, PanResponder} from 'react-native';
import {FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import TextButton from './TextButton';


class Swipeout extends React.Component {

    state={
        editing: false
    }

    handlePress = () => {
    }

    componentWillMount = () => {
        this._panResponder = PanResponder.create({
            // Ask to be the responder:
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

            onPanResponderGrant: (evt, gestureState) => {
                //console.log('test');
            },
            onPanResponderMove: (evt, gestureState) => {
                gestureState.dx >= 50 && this.setState({editing: true})
            },
            onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderRelease: (evt, gestureState) => {
                //console.log(gestureState.dx);
            },
            onPanResponderTerminate: (evt, gestureState) => {
                // Another component has become the responder, so this gesture
                // should be cancelled
            },
            onShouldBlockNativeResponder: (evt, gestureState) => {
                // Returns whether this component should block native components from becoming the JS
                // responder. Returns true by default. Is currently only supported on android.
                return true;
            },
        });
    }

    render() {
        return (
            <View style={styles.containerGrey}{...this._panResponder.panHandlers}>
                <View style={styles.content}><Text>Test</Text></View>
                {this.state.editing && <TextButton style={styles.button} onPress={this.handlePress}>Editing</TextButton>}
            </View>
        )
    }
}

export default Swipeout;

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#6f7fcd',
        alignItem: 'center',
        fontSize: '20',
        borderRadius: 5,
        color: '#ffffff',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        width: 130
    },
    containerGrey: {
        flex: 1,
        maxHeight: '33%',
        flexDirection: 'row',
        borderBottomWidth: 2.5,
        borderColor: '#D3D3D3',
        backgroundColor: '#DCDCDC'
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});
