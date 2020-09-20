import React from 'react';
import {Button, Icon} from 'native-base';

const BackButton = () => {
  return (
    <Button transparent>
      <Icon type="FontAwesome" name="chevron-left" />
    </Button>
  );
};

export default BackButton;
