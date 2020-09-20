import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Picker, Item} from 'native-base';

const sorts = ['departureTime', 'ticketPrice', 'companyName', 'discountPrice'];
const styles = StyleSheet.create({
  sortView: {
    padding: 5,
    paddingTop: 15,
  },
});

const Sort = (props) => {
  const {currSortObj, onSort} = props;
  const currSort = Object.keys(currSortObj)[0];

  return (
    <>
      {sorts.map((sort) => {
        const name = sort;
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
                selectedValue={
                  name === currSort ? currSortObj[currSort].value : null
                }
                onValueChange={onSort}>
                <Picker.Item label="Không chọn" value="null" />
                <Picker.Item label="Tăng dần" value="asc" />
                <Picker.Item label="Giảm dần" value="desc" />
              </Picker>
            </Item>
          </View>
        );
      })}
    </>
  );
};

export default Sort;
