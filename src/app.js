import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from "./components/common";

const app = () => {
  return (
    //passing the reducer to createStore
    //Provider can have only one single child
    <Provider store={createStore(reducers)}>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <Header headerText='Tech Stack'/>
      </View>
    </Provider>
  );
};

export default app;
