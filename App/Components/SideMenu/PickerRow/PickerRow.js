import React from 'react';
import {Item, Picker} from 'native-base';

const PickerRow = ({routes, onValueChange}) => (
  <Item picker>
    <Picker mode="dropdown" onValueChange={onValueChange}>
      {routes.map((route) => (
        <Picker.Item key={route.name} label={route.name} value={route.route} />
      ))}
    </Picker>
  </Item>
);

export default PickerRow;
