import React, {useState} from 'react';
import _ from 'lodash';
import {StyleSheet} from 'react-native';
import {Accordion, Text, View, Content, Icon} from 'native-base';

import Sort from './Sort/Sort';
import Filter from './Filter/Filter';
import RouteSearch from './RouteSearch/RouteSearch';

const styles = StyleSheet.create({
  accordionHeaderView: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3F51B5',
    width: '100%',
  },
  white: {
    color: 'white',
  },
});

const AccordionHeader = (props) => {
  const {row, expanded, isFilter, name} = props;
  let title;
  if (isFilter) {
    title = Object.keys(row)
      .map((rowName) => row[rowName].options.map((opt) => opt.name).join(' - '))
      .join(',\n');
  } else {
    title = row ? Object.keys(row).join(',\n') : name;
  }

  return (
    <View style={styles.accordionHeaderView}>
      <Text style={styles.white}>{title}</Text>
      {expanded ? (
        <Icon style={styles.white} type="FontAwesome" name="chevron-up" />
      ) : (
        <Icon style={styles.white} type="FontAwesome" name="chevron-down" />
      )}
    </View>
  );
};

const BookingHeader = ({
  onBookingHeader,
  currFilterObj,
  currSortObj,
  currSearchObj,
}) => {
  const onDateSearchChange = (
    newDeparturePlace,
    newArrivalPlace,
    newDepartureDate,
  ) => {};

  return (
    <Content padder>
      <Accordion
        dataArray={[currSearchObj]}
        animation={true}
        expanded={false}
        renderHeader={(row, expanded) => (
          <AccordionHeader row={row} expanded={expanded} name="Search" />
        )}
        renderContent={(row) => {
          return (
            <RouteSearch currSearchObj={row} onSearch={onDateSearchChange} />
          );
        }}
      />
      <Accordion
        dataArray={[currFilterObj]}
        animation={true}
        expanded={false}
        renderHeader={(row, expanded) => (
          <AccordionHeader
            row={row}
            expanded={expanded}
            isFilter={true}
            name="Filter"
          />
        )}
        renderContent={(row) => {
          return <Filter currFilterObj={row} onSort={onBookingHeader} />;
        }}
      />
      {currSortObj && (
        <Accordion
          dataArray={[currSortObj]}
          animation={true}
          expanded={false}
          renderHeader={(row, expanded) => (
            <AccordionHeader row={row} expanded={expanded} name="Sort" />
          )}
          renderContent={(row) => {
            return <Sort currSortObj={row} />;
          }}
        />
      )}
    </Content>
  );
};

export default BookingHeader;
