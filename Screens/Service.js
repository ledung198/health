import React from 'react';
import ListItem from './ListItem';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';

export default function Service() {
  return (
    <View style={styles.container}>
      <View style={styles.listService}>
        <ListItem
          name="settings"
          type="feather"
          size={40}
          style={styles.iconService}
          color="#517fa4"
          title="Cắm ghép răng"
        />
        <ListItem
          name="settings"
          type="feather"
          size={40}
          style={styles.iconService}
          color="#517fa4"
          title="Chỉnh nha"
        />
        <ListItem
          name="settings"
          type="feather"
          size={40}
          style={styles.iconService}
          color="#517fa4"
          title="Veneer sứ"
        />
        <ListItem
          name="settings"
          type="feather"
          size={40}
          style={styles.iconService}
          color="#517fa4"
          title="Tẩy trắng răng"
        />
        <ListItem
          name="settings"
          type="feather"
          size={40}
          style={styles.iconService}
          color="#517fa4"
          title="Nhổ răng"
        />
      </View>
      <View style={styles.listService}>
        <ListItem
          name="settings"
          type="feather"
          size={40}
          style={styles.iconService}
          color="#517fa4"
          title="Nha khoa một lần hẹn"
        />
        <ListItem
          name="settings"
          type="feather"
          size={40}
          style={styles.iconService}
          color="#517fa4"
          title="Laser nha khoa"
        />
        <ListItem
          name="settings"
          type="feather"
          size={40}
          style={styles.iconService}
          color="#517fa4"
          title="Nội nha"
        />
        <ListItem
          name="settings"
          type="feather"
          size={40}
          style={styles.iconService}
          color="#517fa4"
          title="Thiết kế nụ cười"
        />
        <ListItem
          name="settings"
          type="feather"
          size={40}
          style={styles.iconService}
          color="#517fa4"
          title="Inlay - Onlay"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  listService:{
    //   padding: 20
    paddingVertical: 20
  },
  iconService: {
    fontSize: 20
  }
});
