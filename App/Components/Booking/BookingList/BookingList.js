import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, CardItem, Body, Text, Icon, View} from 'native-base';
import {Col, Grid} from 'react-native-easy-grid';

const styles = StyleSheet.create({
  companyTimeView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  placeView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 20,
  },
  company: {
    fontWeight: 'bold',
    color: '#0099ff',
    fontSize: 16,
    paddingVertical: 5,
  },
  time: {
    borderWidth: 2,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  paymentMethod: {
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
  price: {
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
});

const BookingList = (props) => {
  const {bookings, openDetail} = props;

  return (
    <>
      {bookings &&
        bookings.length &&
        bookings.map((booking, idx) => {
          const {
            company,
            price,
            departure_time,
            duration,
            departure_place,
            arrival_place,
            vehicle_type,
            total_seats,
            available_seats,
            payment_method,
          } = booking;

          return (
            <Card
              key={company + idx}
              onTouchEnd={() => booking.seatTemplate && openDetail(booking)}>
              <CardItem>
                <Body>
                  <View style={styles.companyTimeView}>
                    <Text style={styles.company}>{company}</Text>
                    <Text
                      style={
                        styles.time
                      }>{`${departure_time} - ${duration} (${duration})`}</Text>
                  </View>
                  <View style={styles.placeView}>
                    <Text>{departure_place}</Text>
                    <Icon type="FontAwesome" name="long-arrow-right" />
                    <Text>{arrival_place}</Text>
                  </View>
                  <Grid>
                    <Col size={40}>
                      <Text>{`${vehicle_type} (${total_seats} chỗ)`}</Text>
                      <Text>{`Số ghế trống: ${available_seats}`}</Text>
                    </Col>
                    <Col size={60}>
                      <Text
                        style={
                          styles.paymentMethod
                        }>{`${payment_method}`}</Text>
                      <Text style={styles.price}>{price}</Text>
                    </Col>
                  </Grid>
                </Body>
              </CardItem>
            </Card>
          );
        })}
    </>
  );
};

export default BookingList;
