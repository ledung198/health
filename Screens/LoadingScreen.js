import React, {useState} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const LoadingScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('Home Screen');
  }, 1000);
  return (
    <>
      <LinearGradient
        colors={['#5FA747', '#1F89BB']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.linearGradient}>
        <SafeAreaView style={styles.loadingScreenContainer}>
          <View style={styles.loadingScreen}>
            <Image
              style={styles.logoLoading}
              source={require('../src/medical-logo-design.jpeg')}
            />
            <View style={styles.titleLoading}>
              <Text style={styles.titleHeader}>Xin Chào!</Text>
              <Text style={styles.title}>Hãy cùng trải nghiệm</Text>
              <Text style={styles.title}>
                Những tiện ích <Text style={styles.titleSpan}> hiện đại</Text>
              </Text>
              <Text style={styles.title}>
                Thao tác <Text style={styles.titleSpan}>đơn giản</Text>
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  loadingScreenContainer: {
    flex: 1,
  },
  loadingScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoLoading: {
    height: 150,
    width: 150,
    marginBottom: 50,
    // flex: 1,
  },
  titleLoading: {
    alignItems: 'center',
  },
  titleHeader: {
    textTransform: 'uppercase',
    paddingVertical: 5,
    fontSize: 20,
    color: '#E7E922',
  },
  title: {
    textTransform: 'uppercase',
    paddingVertical: 5,
    fontSize: 20,
    color: 'white',
    fontWeight: 'normal',
  },
  titleSpan: {
    fontWeight: 'bold',
  },
});

export default LoadingScreen;
