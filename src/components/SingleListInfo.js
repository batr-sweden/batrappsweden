import React from 'react';
import { ImageBackground, Modal, StatusBar, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import Badge from 'react-native-smart-badge';
import QRCode from 'react-native-qrcode';

const SingleListInfo = ({ reward, visible, onPress }) => {
    const { image, points, storeName, thumbnail_image, title, uid } = reward;
    const {
      backgroundImage, imgHeaderContainer,
      imgHeaderText, imgFooterContainer,
      footerBadgeStyle, qrContainer
    } = styles;
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
      >
      <StatusBar hidden />
        <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'space-between' }}>
          <View style={{ height: '50%' }}>
            <ImageBackground
              style={backgroundImage}
              source={{ uri: image }}
              resizeMode='stretch'
            >
              <View style={imgHeaderContainer}>
                <Text style={imgHeaderText}>{storeName}</Text>
                <View style={{ alignSelf: 'flex-end' }}>
                  <Avatar
                    small
                    rounded
                    icon={{ name: 'close', color: 'black' }}
                    overlayContainerStyle={{ backgroundColor: 'white', margin: 0, padding: 0}}
                    onPress={onPress}
                    activeOpacity={0.3}
                  />
                </View>
              </View>

              <View style={imgFooterContainer}>
                <Badge
                  minWidth={18} minHeight={18}
                  textStyle={{ color: '#bf360c', fontSize: 16 }}
                  style={footerBadgeStyle}
                >
                    {points}
                </Badge>
              </View>
            </ImageBackground>
          </View>

          <View style={qrContainer}>
            <QRCode
              value={uid}
              size={100}
              bgColor='#000'
              fgColor='#fff'
            />
          </View>
        </View>
      </Modal>

    );
};

const styles = {
  backgroundImage: {
    width: null,
    height: '100%'
  },
  imgHeaderContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
  imgHeaderText: {
    backgroundColor: 'transparent',
    color: '#fff',
    fontWeight: '800',
    fontSize: 20,
    shadowColor: '#000',
    alignSelf: 'flex-start'
  },
  imgFooterContainer: {
    flex: 1,
    height: null,
    width: null,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  footerBadgeStyle: {
    backgroundColor: '#F8F8F8',
    marginRight: 10,
    marginBottom: 10
  },
  qrContainer: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // paddingTop: 10,
    // height: '50%'
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    height: 200,
    width: 200,
    borderRadius: 100,
    borderWidth: 0,
    backgroundColor: '#ffb74d',
    marginBottom: 20
  }
};

export default SingleListInfo;
