import React from 'react';
import {Dimensions} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import ListItem from './ListItem';

const HomeLogin = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <ListItem
          name="log-in"
          type="feather"
          size={40}
          color="#517fa4"
          title="Đăng nhập"
          onPress={() => {
            navigation.navigate('login');
          }}
        />
        <ListItem
          name="info"
          type="feather"
          size={40}
          color="#517fa4"
          title="Giới thiệu"
          onPress={() => {
            navigation.navigate('Thông tin');
          }}
        />
        <ListItem
          name="settings"
          type="feather"
          size={40}
          color="#517fa4"
          title="Dịch vụ"
          onPress={() => {
            navigation.navigate('Dịch vụ');
          }}
        />
      </View>
      <View style={styles.iconContainerLock}>
        <ListItem
          name="map"
          type="feather"
          size={40}
          color="#517fa4"
          title="Địa chỉ"
        />
        <ListItem
          name="clock"
          type="feather"
          size={40}
          color="#517fa4"
          title="Giờ khám"
          onPress={() => {
            navigation.navigate('Giờ khám');
          }}
        />
      </View>
    </View>
  );
};
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 20,
  },
  iconContainer: {
    // flex: 1,
    flexDirection: 'row',
    paddingVertical: 20,
    width: (width * 90) / 100,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  iconContainerLock: {
    flexDirection: 'row',
    paddingVertical: 20,
    width: (width * 60) / 100,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});
export default HomeLogin;
