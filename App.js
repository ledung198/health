import React from 'react';
import {Text} from 'react-native';
import 'react-native-gesture-handler';
import HomeScreen from './Screens/HomeScreen';
import LoadingScreen from './Screens/LoadingScreen';
import {Icon} from 'react-native-elements';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Screens/Login';
import Intro from './Screens/Intro';
import Service from './Screens/Service';
import {StyleSheet} from 'react-native';
import TimeOut from './Screens/TimeOut';
import HomeLogin from './Screens/HomeLogin';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Loading" component={LoadingScreen} options={{}} />
        <Stack.Screen name="Home Screen" component={HomeScreen} />
        <Stack.Screen
          name="Thông tin"
          component={Intro}
          options={{
            headerTitle: 'Thông tin',
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTitleStyle: {
              color: '#fff',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen name="Dịch vụ" component={Service} />
        <Stack.Screen name="Giờ khám" component={TimeOut} />
        {/* <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="User"
          component={HomeLogin}
          options={{
            headerRight: props => {
              return (
                <Icon name="bell" type="feather" color="black" size={20} />
              );
            },
          }}
        /> */}
        <LoginStack />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const LoginStack = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="User"
          component={HomeLogin}
          options={{
            headerRight: props => {
              return (
                <Icon name="bell" type="feather" color="black" size={20} />
              );
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});
export default App;
