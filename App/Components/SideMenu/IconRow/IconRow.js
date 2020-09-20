import React from 'react';
import {StyleSheet} from 'react-native';
import {Icon, Text} from 'native-base';

const styles = StyleSheet.create({
  icon: {
    color: '#777',
    fontSize: 26,
    width: 30,
  },
  text: {
    fontWeight: Platform.OS === 'ios' ? '500' : '400',
    fontSize: 16,
    marginLeft: 20,
  },
  activeRow: {
    color: 'white',
  },
});

const IconRow = ({data}) => (
  <>
    <Icon
      active
      type="FontAwesome"
      name={data.icon}
      style={{...styles.icon, ...(data.active ? styles.activeRow : {})}}
    />
    <Text style={{...styles.text, ...(data.active ? styles.activeRow : {})}}>
      {data.name}
    </Text>
  </>
);

export default IconRow;
