import React from 'react';
import {Content} from 'native-base';

import BookingHeader from './BookingHeader/BookingHeader';
import BookingList from './BookingList/BookingList';

const filterObj = require('./filters.json');
const sortObj = require('./sorts.json');
const bookingArr = require('./bookings.json');

const Booking = (props) => {
  const {navigation} = props;

  return (
    <Content>
      <BookingHeader currFilterObj={filterObj} currSortObj={sortObj} />
      <BookingList
        bookings={bookingArr}
        openDetail={(booking) =>
          navigation.navigate('BookingDetail', {booking})
        }
      />
    </Content>
  );
};

export default Booking;
