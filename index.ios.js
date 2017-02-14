/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Router, Scene, Actions, Modal, TabBar, Reducer } from 'react-native-router-flux';

class TabIcon extends Component {
  render(){
    return (
      <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
    );
  }
}

const reducerCreate = params=>{
    const defaultReducer = Reducer(params);
    return (state, action)=>{
        // console.log("ACTION:", action);
        return defaultReducer(state, action);
    }
};

class Page1 extends Component {
  render() {
    return (
      <View style={styles.container1}>
        <Text style={styles.welcome}>
          Welcome to Page1
        </Text>
        <Text onPress={Actions.pageTwo}>next Page2!</Text>
      </View>
    );
  }
}

class Page2 extends Component {
  render() {
    return (
      <View style={styles.container2}>
        <Text style={styles.welcome}>
          Welcome to Page2
        </Text>
        <Text onPress={Actions.pageThree}>Next Page Modal!</Text>
      </View>
    );
  }
}

class Page3 extends Component {
  render() {
    return (
      <View style={styles.container3}>
        <Text style={styles.welcome}>
          Welcome to Page3
        </Text>
        <Text onPress={Actions.pop}>Close Page Modal!</Text>
      </View>
    );
  }
}

class Page4 extends Component {
  render() {
    return (
      <View style={styles.container4}>
        <Text style={styles.welcome}>
          Welcome to Page4
        </Text>
        <Text onPress={Actions.tab2_2}>Next Page5!</Text>
      </View>
    );
  }
}

class Page5 extends Component {
  render() {
    return (
      <View style={styles.container5}>
        <Text style={styles.welcome}>
          Welcome to Page5
        </Text>
      </View>
    );
  }
}

class Page6 extends Component {
  render() {
    return (
      <View style={styles.container6}>
        <Text style={styles.welcome}>
          Welcome to Page6
        </Text>
      </View>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Router createReducer={reducerCreate} sceneStyle={{backgroundColor:'#F7F7F7'}}>
        <Scene key="modal" component={Modal} >
          <Scene key="root">
            <Scene key="tabbar" tabs={true} >
                <Scene key="tab1" title="Tab #1" icon={TabIcon} navigationBarStyle={{backgroundColor:'red'}} titleStyle={{color:'white'}}>
                  <Scene key="pageOne" component={Page1} title="Tab #1_1" onRight={()=>alert("Right button")} rightTitle="Right" />
                  <Scene key="pageTwo" component={Page2} title="Tab #1_2" titleStyle={{color:'black'}}/>
                  <Scene key="pageThree" direction="vertical" hideTabBar={true} hideNavBar={true} component={Page3} schema="modal" title="Login"/>
                </Scene>
                <Scene key="tab2" initial={true} title="Tab #2" icon={TabIcon}>
                    <Scene key="tab2_1" component={Page4} title="Tab #2_1" onLeft={()=>alert("Left button!")} leftTitle="Left"/>
                    <Scene key="tab2_2" component={Page5} title="Tab #2_2"/>
                </Scene>
                <Scene key="tab3" component={Page6} title="Tab #3" icon={TabIcon} />
            </Scene>
          </Scene>
        </Scene>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  container3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  container4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  container5: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  container6: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('sample_router_flux', () => App);
