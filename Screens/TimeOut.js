import React from 'react';
import {ImageBackground} from 'react-native';
import {SafeAreaView, View, StyleSheet, Dimensions, Text} from 'react-native';
import Doctor from '../image/doctor-character-background_1270-84.jpg';
import ListItem from './ListItem';

const TimeOut = () => {
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <ImageBackground source={Doctor} style={styles.DoctorBackground}>
        <View style={styles.container}>
          <View style={styles.content}>
            <ListItem
              name="map-pin"
              type="feather"
              size={30}
              color="#517fa4"
              style={styles.iconContent}
            />
            <Text style={styles.titleContent}>
              55 Bàu Cát 4, Quận Tân Bình, Thành phố Hồ Chí Minh
            </Text>
          </View>
          <View style={styles.content}>
            <ListItem
              name="globe"
              type="feather"
              size={30}
              color="#517fa4"
              style={styles.iconContent}
            />
            <Text style={styles.titleContent}>www.upsharework.com</Text>
          </View>
          <View style={styles.content}>
            <ListItem
              name="phone"
              type="feather"
              size={30}
              color="#517fa4"
              style={styles.iconContent}
            />
            <Text style={styles.titleContent}>+84 123 456 789</Text>
          </View>
        </View>
        <View style={styles.container2}>
          <View style={styles.headerContent}>
            <ListItem
              style={styles.iconHeader}
              name="clock"
              type="feather"
              size={30}
              color="#517fa4"
            />
            <Text style={styles.headerTitle}>Giờ mở cửa</Text>
          </View>
          <View>
            <View style={styles.content}>
              <Text style={styles.titleContent2}>Thứ 2 - Thứ 7</Text>
              <Text style={styles.titleContent2}>8:30AM - 8:00PM</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.titleContent2}>Chủ nhật</Text>
              <Text style={styles.titleContent2}>8:30AM - 5:00PM</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const Height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    width: (width * 90) / 100,
    marginVertical: 20,
    borderRadius: 20,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  iconContent: {
    paddingHorizontal: 5,
    flex: 1,
  },
  titleContent: {
    fontSize: 18,
    paddingHorizontal: 5,
    flex: 5,
  },
  container2: {
    backgroundColor: 'white',
    padding: 10,
    width: (width * 90) / 100,

    borderRadius: 20,
  },
  headerContent: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  headerTitle: {
    fontSize: 20,
    paddingHorizontal: 5,
    flex: 5,
  },
  iconHeader: {
    paddingHorizontal: 5,
    flex: 1,
  },
  titleContent2: {
    fontSize: 18,
    paddingVertical: 10,
  },

  DoctorBackground: {
    height: Height,
    width: width,
    opacity: 1,
    flex: 1,
    alignItems: 'center',
  },
});

export default TimeOut;
