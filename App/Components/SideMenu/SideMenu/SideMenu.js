import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {
  Container,
  Content,
  List,
  ListItem,
  Left,
  Text,
  Card,
  CardItem,
  Body,
} from 'native-base';
import styled from 'styled-components';

import IconRow from '../IconRow/IconRow';
import PickerRow from '../PickerRow/PickerRow';

const vxrLogo = require('../../../Images/icon_vxr_full.png');
const ScreenData = require('./ScreenData.json');

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#fff',
    top: -1,
  },
  cover: {
    alignSelf: 'center',
    position: 'relative',
    marginTop: 30,
    marginBottom: 20,
  },
  iconPicker: {
    marginBottom: -25,
  },
  activeItem: {
    backgroundColor: '#3F51B5',
  },
});
const ScreenListItem = styled(ListItem)`
  padding-left: 10px;
  margin-right: 20px;
`;

const SideMenu = () => {
  return (
    <Container>
      <Content bounces={true} style={styles.content}>
        <Image source={vxrLogo} style={styles.cover} />
        <Card>
          <CardItem>
            <Body>
              <Text>{'Vé hôm nay: ĐC: 8, TT: 7, H: 10, Tổng: 15'}</Text>
              <Text>{'Vé của bạn: ĐC: 0, TT: 0, H: 0, Tổng: 0'}</Text>
            </Body>
          </CardItem>
        </Card>
        <List
          dataArray={ScreenData}
          renderRow={(data) => {
            return data.subRoutes ? (
              <>
                <ScreenListItem
                  button
                  noBorder
                  style={styles.iconPicker}
                  {...(data.active && {
                    style: styles.activeItem,
                  })}>
                  <Left>
                    <IconRow data={data} />
                  </Left>
                </ScreenListItem>
                <ScreenListItem button noBorder>
                  <Left>
                    {data.subRoutes && (
                      <PickerRow
                        routes={data.subRoutes}
                        onValueChange={() => {}}
                      />
                    )}
                  </Left>
                </ScreenListItem>
              </>
            ) : (
              <ScreenListItem
                button
                noBorder
                {...(data.active && {
                  style: styles.activeItem,
                })}
                onPress={() => {}}>
                <Left>
                  <IconRow data={data} />
                </Left>
              </ScreenListItem>
            );
          }}
        />
      </Content>
    </Container>
  );
};

export default SideMenu;
