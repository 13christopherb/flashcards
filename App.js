import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import DeckList from "./src/components/DeckList";
import NewDeck from './src/components/NewDeck';
import Deck from './src/components/Deck';
import NewCard from './src/components/NewCard';
import Result from './src/components/Result';
import reducer from './src/reducers/reducers';
import { setLocalNotification } from "./src/utils/helpers";

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

export default class App extends React.Component {

    componentDidMount() {
        setLocalNotification();
    }

    render() {
        return (
            <Provider store={store}>
                <Stack />
            </Provider>
        );
    }
}


const Stack = StackNavigator({
    Home: {
        screen: DeckList
    },
    Deck: {
        screen: Deck
    },
    NewDeck: {
        screen: NewDeck
    },
    NewCard: {
        screen: NewCard
    },
    Result: {
        screen: Result
    }
})