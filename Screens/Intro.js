import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Text,
} from 'react-native';
import Doctor from '../image/doctor-character-background_1270-84.jpg';
const Intro = () => {
  return (
    <SafeAreaView>
      <View>
        <ImageBackground source={Doctor} style={styles.DoctorBackground}>
          <Text style={styles.title}>
            Với mong muốn mang đến sự chăm sóc răng miệng toàn diện cho bệnh
            nhân, các Bác sỹ và đội ngũ đã nỗ lực xây dựng nên một trung tâm nha
            khoa hiện đại kỹ thuật cao, xanh sạch và thân thiên
          </Text>
          <Text style={styles.title}>
            <Text style={styles.titleHeader}>Tầm nhìn:</Text>Với mong muốn mang
            đến sự chăm sóc răng miệng toàn diện cho bệnh nhân, các Bác sỹ và
            đội ngũ đã nỗ lực xây dựng nên một trung tâm nha khoa hiện đại kỹ
            thuật cao, xanh sạch và thân thiên
          </Text>
          <Text style={styles.title}>
            <Text style={styles.titleHeader}>Tầm nhìn:</Text>Với mong muốn mang
            đến sự chăm sóc răng miệng toàn diện cho bệnh nhân, các Bác sỹ và
            đội ngũ đã nỗ lực xây dựng nên một trung tâm nha khoa hiện đại kỹ
            thuật cao, xanh sạch và thân thiên
          </Text>
          <Text style={styles.title}>
            <Text style={styles.titleHeader}>Tầm nhìn:</Text>Với mong muốn mang
            đến sự chăm sóc răng miệng toàn diện cho bệnh nhân, các Bác sỹ và
            đội ngũ đã nỗ lực xây dựng nên một trung tâm nha khoa hiện đại kỹ
            thuật cao, xanh sạch và thân thiên
          </Text>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};
const Height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  DoctorBackground: {
    height: Height,
    width: width,
    opacity: 1,
  },
  title: {
    opacity: 1,
    justifyContent: 'space-evenly',
    paddingVertical: 15,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  titleHeader: {
    fontSize: 20,
    textTransform: 'uppercase',
    color: 'green',
    justifyContent: 'space-evenly',
  },
});
export default Intro;
