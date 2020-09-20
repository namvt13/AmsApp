import React, {useState, useEffect} from 'react';
import _ from 'lodash';
import moment from 'moment';
import {StyleSheet} from 'react-native';
import {DatePicker, Item, Picker, View, Text} from 'native-base';

const styles = StyleSheet.create({
  sortView: {
    padding: 5,
    paddingTop: 15,
  },
});

const RouteSearch = (props) => {
  const {currSearchObj, onSearch} = props;
  const {departurePlace, arrivalPlace, departureDate} = currSearchObj || {};
  const [date, setDate] = useState(moment(departureDate || undefined));
  const [departure, setDeparture] = useState(departurePlace || '');
  const [arrival, setArrival] = useState(arrivalPlace || '');
  const minDate = date.clone().subtract(7, 'days').toDate();
  const maxDate = date.clone().add(7, 'days').toDate();

  useEffect(() => {
    setDate(moment(departureDate || undefined));
    setDeparture(departurePlace || '');
    setArrival(arrivalPlace || '');
  }, [departureDate, departurePlace, arrivalPlace]);

  return (
    <>
      <View key={'departurePlace'}>
        <View style={styles.sortView}>
          <Text>{'departurePlace'}</Text>
        </View>
        <Item picker>
          <Picker
            note
            selectedValue={departure}
            onValueChange={(newDeparturePlace) =>
              setDeparture(newDeparturePlace)
            }>
            <Picker.Item label="Sài Gòn" value="Sài Gòn" />
          </Picker>
        </Item>
      </View>
      <View key={'arrivalPlace'}>
        <View style={styles.sortView}>
          <Text>{'departurePlace'}</Text>
        </View>
        <Item picker>
          <Picker
            note
            key={'arrivalPlace'}
            selectedValue={arrival}
            onValueChange={(newArrivalPlace) => setDeparture(newArrivalPlace)}>
            <Picker.Item label="Vũng Tàu" value="Vũng Tàu" />
          </Picker>
        </Item>
      </View>
      <View key="departureDate">
        <View style={styles.sortView}>
          <Text>{'departureDate'}</Text>
        </View>
        <DatePicker
          defaultDate={date.toDate()}
          minimumDate={minDate}
          maximumDate={maxDate}
          locale="en"
          modalTransparent={false}
          animationType="fade"
          placeHolderText="Chọn ngày tìm chuyến"
          textStyle={{color: 'green'}}
          placeHolderTextStyle={{color: '#d3d3d3'}}
          onDateChange={(newDate) => setDate(moment(newDate))}
          disabled={false}
        />
      </View>
    </>
  );
};

export default RouteSearch;
