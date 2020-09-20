import React from 'react';
import _ from 'lodash';
import {StyleSheet} from 'react-native';
import {Item, Picker, View, Text} from 'native-base';

const filters = [
  'companyName',
  'departureTime',
  'pickupPlace',
  'departurePlace',
  'vehicleType',
];
const styles = StyleSheet.create({
  sortView: {
    padding: 5,
    paddingTop: 15,
  },
});

const Filter = (props) => {
  const {currFilterObj, onFilter} = props;

  return (
    <>
      {filters.map((filter) => {
        const name = filter;
        const options = _.get(currFilterObj[filter], 'options') || [];

        return (
          <View key={name}>
            <View style={styles.sortView}>
              <Text>{name}</Text>
            </View>
            <Item picker>
              <Picker
                note
                key={name}
                mode="dropdown"
                selectedValue={name}
                onValueChange={onFilter}>
                {options.map((option) => {
                  return (
                    <Picker.Item
                      key={option.name + option.value}
                      label={option.name}
                      value={option.value}
                    />
                  );
                })}
              </Picker>
            </Item>
          </View>
        );
      })}
    </>
  );
};

export default Filter;
