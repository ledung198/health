import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';

const ListItem = props => {
  return (
    <TouchableOpacity style={styles.HomeContainer} onPress={props.onPress}>
      <Icon
        name={props.name}
        type={props.type}
        color={props.color}
        style={styles.IconHome}
        size={props.size}
      />
      <Text style={styles.TitleHome}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  HomeContainer: {
    flex: 1,
  },
  TitleHome: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default ListItem;
