import React, {useState} from 'react';
import {Keyboard} from 'react-native';
import {TextInput} from 'react-native';

import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import {Icon} from 'react-native-elements';
import CheckBox from '@react-native-community/checkbox';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Login = navigate => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex: 1}}>
          <View style={{flex: 1}}>
            <View style={styles.login}>
              <Image
                style={styles.logoLogin}
                source={require('../src/medical-logo-design.jpeg')}
              />
            </View>
            <View style={styles.formLogin}>
              <View style={styles.fieldLogin}>
                <Icon name="mail" type="feather" color="#517fa4" />
                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Email"
                  style={styles.fieldInput}
                  autoCompleteType="email"
                />
              </View>
              <View style={styles.fieldLogin}>
                <Icon name="lock" type="feather" color="#517fa4" />
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Mật khẩu"
                  style={styles.fieldInput}
                  autoCompleteType="password"
                />
              </View>
              <View style={styles.register}>
                <TouchableOpacity>
                  <Text style={styles.registerLogin}>Đăng ký ngay!</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.forgotPassword}>Quên mật khẩu?</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.checkBox}>
                <View style={styles.saveCheckBox}>
                  <CheckBox value={checkbox} onValueChange={setCheckbox} />
                  <Text>Tự động đăng nhập lần sau</Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.btnLogin}
                onPress={() => {
                  navigation.navigate('User');
                }}>
                <Text style={styles.titleLogin}>Đăng nhập</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  },
  logoLogin: {
    height: 100,
    width: 100,
  },
  formLogin: {
    flex: 7,
    alignItems: 'center',
  },
  fieldLogin: {
    flexDirection: 'row',
    width: widthScreen,
    paddingHorizontal: 20,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  fieldInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: (widthScreen * 7) / 10,
    marginLeft: 20,
    padding: 5,
  },
  register: {
    flexDirection: 'row',
    width: (widthScreen * 9) / 10,
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  registerLogin: {
    fontSize: 17,
    color: 'green',
  },
  forgotPassword: {
    fontSize: 17,
    color: 'orange',
  },
  saveCheckBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  btnLogin: {
    width: (widthScreen * 8) / 10,
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
  },
  titleLogin: {
    color: 'white',
    fontSize: 16,
  },
});
export default Login;
