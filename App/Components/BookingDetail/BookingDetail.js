import React, {useRef, useState} from 'react';
import {StyleSheet} from 'react-native';
import PhoneInput from 'react-native-phone-input';
import CountryPicker from 'react-native-country-picker-modal';
import {
  View,
  Text,
  Button,
  Switch,
  Item,
  Input,
  Form,
  Icon,
  Picker,
  Textarea,
  Radio,
  ListItem,
  Card,
  CardItem,
  Left,
  Right,
  DatePicker,
  Separator,
  Accordion,
  Content,
} from 'native-base';
import {Grid, Col, Row} from 'react-native-easy-grid';

const FloorSeat = (props) => {
  const {floorSeats} = props;
  let seatRows, seatLastCol;
  if (floorSeats.length > 2) {
    seatRows = floorSeats.slice(0, floorSeats.length - 1);
    seatLastCol = floorSeats[floorSeats.length - 2];
  } else {
    seatRows = floorSeats.slice(0, floorSeats.length);
    seatLastCol = [];
  }

  return (
    <Grid style={styles.seatGrid}>
      {seatRows[0].map((_, idx) => {
        return (
          <Col style={styles.seatCol}>
            {seatRows.map((row) => {
              return (
                <Row style={styles.seatRow}>
                  <Text>{row[idx]}</Text>
                </Row>
              );
            })}
          </Col>
        );
      })}
      {
        <Col style={styles.seatCol}>
          {seatLastCol.map((seat) => {
            return (
              <Row style={styles.seatRow}>
                <Text>{seat}</Text>
              </Row>
            );
          })}
        </Col>
      }
    </Grid>
  );
};

const legends = {
  'Ghế trống': 'white',
  'Ghế đã đặt': 'grey',
  'Đang chọn': 'green',
  'Ghế hờ': 'blue',
  'Ghế online': 'pink',
  'Dấu hiệu có giảm giá': 'red',
  'Ghế bị khóa (Phải gọi nhà xe xin trước)': 'yellow',
};

const ticketReservations = [
  {
    title: 'Hẹn lấy vé',
    datePickerTitle: 'Ngày lấy vé',
    timePickerTitle: 'Giờ lấy vé',
  },
  {
    title: 'Hủy vé',
    datePickerTitle: 'Ngày hủy vé',
    timePickerTitle: 'Giờ hủy vé',
  },
];

const styles = StyleSheet.create({
  seatGrid: {
    height: 100,
    borderWidth: 1,
  },
  seatCol: {
    borderWidth: 1,
  },
  seatRow: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrappedFlexRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  centerFlexRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  spaceEvenRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  linkButton: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  detailHeader: {
    backgroundColor: '#3F51B5',
    padding: 10,
  },
  detailHeaderDatePicker: {
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 5,
    fontWeight: 'bold',
  },
  contentView: {
    padding: 10,
  },
  marginView: {
    marginVertical: 5,
  },
  white: {
    color: 'white',
  },
  bold: {
    fontWeight: 'bold',
  },
  blackBorder: {
    borderWidth: 1,
    borderColor: '#D9D5DC',
    padding: 2,
  },
  placePicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#D9D5DC',
  },
  inputLabel: {
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  importantLabel: {
    color: 'red',
    fontSize: 24,
  },
  ticketReservationAccordionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#A9DAD6',
  },
  ticketReservationAccordionHeaderText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

const BookingDetail = (props) => {
  const {
    navigation: {
      state: {params},
    },
  } = props;
  const [noSeatCode, setNoSeatCode] = useState(false);
  const {booking} = params;
  const {seatTemplate} = booking;
  const phoneGoer = useRef().current;
  const [phoneGoerCountry, setPhoneGoerCountry] = useState(false);
  const phoneBuyer = useRef().current;
  const [phoneBuyerCountry, setPhoneBuyerCountry] = useState(false);

  return (
    <Content>
      <View style={styles.detailHeader}>
        <Text style={styles.white}>
          {'Đặt vé Ngọc Ánh (đặt trên phần mềm) thời gian'}
        </Text>
        <View>
          {/* <DatePicker
            defaultDate={new Date()}
            locale="en"
            modalTransparent={false}
            animationType="fade"
            textStyle={[styles.detailHeaderDatePicker, styles.white]}
            onDateChange={(newDate) => {}}
            disabled={false}
          /> */}
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon type="FontAwesome" name="chevron-down" />}
              placeholder="Giờ đi"
              placeholderStyle={styles.white}
              placeholderIconColor="#007aff"
              selectedValue=""
              style={styles.white}
              onValueChange={() => {}}>
              <Picker.item label="21:00" value="21:00" />
            </Picker>
          </Item>
        </View>
        <View style={[styles.wrappedFlexRow, styles.centerFlexRow]}>
          <Text style={[styles.linkButton, styles.white]}>
            {'Vp Hồ Chí Minh'}
          </Text>
          <Text>{'  ->  '}</Text>
          <Text style={[styles.linkButton, styles.white]}>
            {'Bến xe khách Hộ Phòng'}
          </Text>
          <Text style={[styles.linkButton, styles.white]}>
            {'Xem số điện thoại'}
          </Text>
        </View>
      </View>
      <View>
        {seatTemplate.map((floorSeats) => {
          return <FloorSeat floorSeats={floorSeats} />;
        })}
      </View>
      <View style={styles.wrappedFlexRow}>
        {Object.keys(legends).map((key) => (
          <Button rounded style={{backgroundColor: legends[key], margin: 5}}>
            <Text style={{color: 'black'}}>{key}</Text>
          </Button>
        ))}
      </View>

      <Separator />

      <View style={styles.contentView}>
        <Text style={{color: 'red', paddingBottom: 5}}>
          {'* Đặt vé trục tiếp từ AMS trước giờ khởi hành 1 giờ '}
        </Text>
        <Grid>
          <Row>
            <Col style={styles.blackBorder}>
              <Text>{'Ghế đã chọn'}</Text>
            </Col>
            <Col style={styles.blackBorder}>
              <Text>{'SL'}</Text>
            </Col>
            <Col style={styles.blackBorder}>
              <Text>{'Giá'}</Text>
            </Col>
          </Row>
          <Row>
            <Col style={styles.blackBorder}>
              <Text>{''}</Text>
            </Col>
            <Col style={styles.blackBorder}>
              <Text>{0}</Text>
            </Col>
            <Col style={styles.blackBorder}>
              <Text>{160000}</Text>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row style={styles.contentView}>
            <Col>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontWeight: 'bold'}}>
                  <Text>{'Tổng giá vé:'}</Text>
                </Text>
                <Text style={{fontWeight: 'bold'}}>
                  <Text>{'0 VNĐ'}</Text>
                </Text>
              </View>
            </Col>
            <Col>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 16, color: 'red'}}>{'Tổng tiền:'}</Text>
                <Text>{'0 VNĐ'}</Text>
              </View>
            </Col>
          </Row>
          <Row style={styles.contentView}>
            <Col>
              <Button transparent style={styles.linkButton}>
                <Text>{'Nhập giảm giá, phụ thu coupon'}</Text>
              </Button>
            </Col>
            <Col>
              <View>
                <Button transparent style={styles.linkButton}>
                  <Text>{'Chính sách hủy vé'}</Text>
                </Button>
              </View>
            </Col>
          </Row>
          <Row>
            <Col style={{justifyContent: 'center'}}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Switch
                  value={noSeatCode}
                  onTouchStart={() => setNoSeatCode(!noSeatCode)}
                />
                <Text>{'NX không báo mã'}</Text>
              </View>
            </Col>
            <Col style={styles.centerFlexRow}>
              <Button style={{backgroundColor: 'red', padding: 10}}>
                <Text>{'Hết vé'}</Text>
              </Button>
            </Col>
          </Row>
        </Grid>
      </View>

      <Separator />

      <Form>
        <Item regular style={styles.marginView}>
          <Input placeholder="Họ và tên" />
        </Item>
        <View style={styles.marginView}>
          <PhoneInput
            style={[styles.blackBorder, styles.contentView]}
            ref={phoneGoer}
            textProps={{placeholder: 'Số điện thoại người đi'}}
            onPressFlag={() => setPhoneGoerCountry(true)}
          />
          <CountryPicker
            visible={phoneGoerCountry}
            onClose={() => setPhoneGoerCountry(false)}
            containerButtonStyle={{display: 'none'}}
          />
        </View>
        <View style={styles.marginView}>
          <PhoneInput
            style={[styles.blackBorder, styles.contentView]}
            ref={phoneBuyer}
            textProps={{placeholder: 'Số điện thoại người đặt'}}
            onPressFlag={() => setPhoneBuyerCountry(true)}
          />
          <CountryPicker
            visible={phoneBuyerCountry}
            onClose={() => setPhoneBuyerCountry(false)}
            containerButtonStyle={{display: 'none'}}
          />
        </View>
        <Item regular style={styles.marginView}>
          <Input placeholder="Email" />
        </Item>
        <Item regular style={styles.marginView}>
          <Input placeholder="ĐC hiện tại của khách" />
        </Item>
        <View style={styles.placePicker}>
          <Text>
            Chọn điểm đón, TC nơi đi{' '}
            <Icon type="FontAwesome" name="exclamation-circle" />
          </Text>
          <Button style={{backgroundColor: 'green'}}>
            <Text>Vị trí xe hiện tại</Text>
          </Button>
        </View>
        <Text style={styles.inputLabel}>{'Điểm đón'}</Text>
        <Item picker>
          <Picker
            mode="dropdown"
            iosIcon={<Icon type="FontAwesome" name="chevron-down" />}
            placeholder="Địa chỉ điểm đón"
            placeholderStyle={{color: '#bfc6ea'}}
            placeholderIconColor="#007aff"
            selectedValue=""
            onValueChange={() => {}}>
            <Picker.Item
              label="Sân Bay Tân Sơn Nhất (Phường 2)"
              value="Sân Bay Tân Sơn Nhất (Phường 2)"
            />
          </Picker>
        </Item>
        <Text style={styles.inputLabel}>{'Trung chuyển đón'}</Text>
        <Item picker>
          <Picker
            mode="dropdown"
            iosIcon={<Icon type="FontAwesome" name="chevron-down" />}
            placeholder="Trung chuyển nơi đi"
            placeholderStyle={{color: '#bfc6ea'}}
            placeholderIconColor="#007aff"
            selectedValue=""
            onValueChange={() => {}}>
            <Picker.Item label="Lựa chọn khác" value="null" />
          </Picker>
        </Item>
        <View style={styles.placePicker}>
          <Text>
            Chọn điểm trả, TC nơi đến{' '}
            <Icon type="FontAwesome" name="exclamation-circle" />
          </Text>
        </View>
        <Text style={styles.inputLabel}>{'Điểm trả'}</Text>
        <Item picker>
          <Picker
            mode="dropdown"
            iosIcon={<Icon type="FontAwesome" name="chevron-down" />}
            placeholder="Địa chỉ điểm trả"
            placeholderStyle={{color: '#bfc6ea'}}
            placeholderIconColor="#007aff"
            selectedValue=""
            onValueChange={() => {}}>
            <Picker.Item
              label="Bến xe khách Hộ Phòng (QL1A, Hộ Phòng, Giá Rai, Bạc Liêu, Việt Nam)"
              value="Bến xe khách Hộ Phòng (QL1A, Hộ Phòng, Giá Rai, Bạc Liêu, Việt Nam)"
            />
          </Picker>
        </Item>
        <Text style={styles.inputLabel}>{'Trung chuyển trả'}</Text>
        <Item picker>
          <Picker
            mode="dropdown"
            iosIcon={<Icon type="FontAwesome" name="chevron-down" />}
            placeholder="Trung chuyển tại nơi đến"
            placeholderStyle={{color: '#bfc6ea'}}
            placeholderIconColor="#007aff"
            selectedValue=""
            onValueChange={() => {}}>
            <Picker.Item label="Lựa chọn khác" value="null" />
          </Picker>
        </Item>
        <View style={styles.marginView}>
          <Item style={styles.marginView} regular>
            <Input placeholder="SĐT tài xế" />
          </Item>
          <Item style={styles.marginView} regular>
            <Input placeholder="Ghi chú" />
          </Item>
        </View>
        <View style={[styles.spaceEvenRow, styles.contentView]}>
          <Button>
            <Text>{'Sao chép'}</Text>
          </Button>
          <Button>
            <Text>{'Dán'}</Text>
          </Button>
        </View>
      </Form>

      <Separator />

      <Form>
        <View style={styles.contentView}>
          <Text style={styles.importantLabel}>{'Bắt buộc VXR thu tiền'}</Text>
          <Text style={styles.inputLabel}>{'Chọn hình thức thanh toán'}</Text>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon type="FontAwesome" name="chevron-down" />}
              selectedValue=""
              onValueChange={() => {}}>
              <Picker.Item label="Lựa chọn khác" value="null" />
            </Picker>
          </Item>
        </View>
        <View style={styles.contentView}>
          <Text style={styles.importantLabel}>{'Hẹn thanh toán:'}</Text>
          <Accordion
            dataArray={ticketReservations}
            animation={true}
            expanded={false}
            renderHeader={(item, expanded) => (
              <View
                style={[
                  styles.ticketReservationAccordionHeader,
                  {marginVertical: 5, padding: 5},
                ]}>
                <Text
                  style={[
                    styles.ticketReservationAccordionHeaderText,
                    styles.white,
                  ]}>
                  {item.title}
                </Text>
                {expanded ? (
                  <Icon
                    style={styles.white}
                    type="FontAwesome"
                    name="chevron-up"
                  />
                ) : (
                  <Icon
                    style={styles.white}
                    type="FontAwesome"
                    name="chevron-down"
                  />
                )}
              </View>
            )}
            renderContent={(item) => (
              <View>
                <Text style={[styles.inputLabel, styles.contentView]}>
                  {item.datePickerTitle}
                </Text>
                <View style={styles.blackBorder}>
                  <DatePicker
                    defaultDate={new Date()}
                    locale="en"
                    modalTransparent={false}
                    animationType="fade"
                    onDateChange={(newDate) => {}}
                    disabled={false}
                  />
                </View>
                <Text style={[styles.inputLabel, styles.contentView]}>
                  {item.timePickerTitle}
                </Text>
                <View style={styles.blackBorder}>
                  <Item picker>
                    <Picker
                      mode="dropdown"
                      iosIcon={<Icon type="FontAwesome" name="chevron-down" />}
                      onValueChange={() => {}}>
                      <Picker.item label="21:00" value="21:00" />
                    </Picker>
                  </Item>
                </View>
              </View>
            )}
          />
        </View>
        <Textarea rowSpan={4} bordered placeholder="Ghi chú nội bộ VXR" />
      </Form>

      <Separator />

      <Form>
        <ListItem>
          <Radio selected={false} />
          <Text>{'Chưa XN chỗ với khách'}</Text>
        </ListItem>
        <ListItem>
          <Radio selected={false} />
          <Text>{'Chưa báo NX đặt'}</Text>
        </ListItem>
        <ListItem>
          <Radio selected={false} />
          <Text>{'Chưa báo NX TT'}</Text>
        </ListItem>

        <Card>
          <CardItem>
            <ListItem>
              <Left>
                <Switch selected={false} />
                <Text>{'Khứ hồi'}</Text>
              </Left>
              <Right>
                <Input placeholder="Chọn ngày về" />
                <Button>
                  <Text>{'Đặt vé'}</Text>
                </Button>
              </Right>
            </ListItem>
          </CardItem>
          <CardItem>
            <ListItem>
              <Switch selected={false} />
              <Text>{'Dự kiến'}</Text>
            </ListItem>
          </CardItem>
          <CardItem>
            <ListItem>
              <Switch selected={false} />
              <Text>{'Không khứ hồi'}</Text>
            </ListItem>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <ListItem>
              <Switch selected={false} />
              <Text>{'SMS người đi'}</Text>
            </ListItem>
            <ListItem>
              <Switch selected={false} />
              <Text>{'SMS người đặt'}</Text>
            </ListItem>
            <ListItem>
              <Switch selected={false} />
              <Text>{'Email'}</Text>
            </ListItem>
          </CardItem>
          <CardItem>
            <ListItem>
              <Switch selected={false} />
              <Text>{'English'}</Text>
            </ListItem>
          </CardItem>
          <CardItem>
            <ListItem>
              <Switch selected={false} />
              <Text>{'SMS nhà xe'}</Text>
            </ListItem>
            <ListItem>
              <Switch selected={false} />
              <Text>{'Email nhà xe'}</Text>
            </ListItem>
          </CardItem>
        </Card>
      </Form>
    </Content>
  );
};

export default BookingDetail;
