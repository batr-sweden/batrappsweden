import React from 'react';
import { ImageBackground, Modal, TouchableHighlight, Text, View } from 'react-native';
import Badge from 'react-native-smart-badge';
import QRCode from 'react-native-qrcode';
import { Button } from './common';

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
        <View style={{ flex: 1, backgroundColor: '#fff', marginTop: 22 }}>
          <View style={{ height: '50%' }}>
            <ImageBackground
              style={backgroundImage}
              source={{ uri: image }}
              resizeMode='stretch'
            >
              <View style={imgHeaderContainer}>
                <Text style={imgHeaderText}>{storeName}</Text>
              </View>
              <View style={imgFooterContainer}>
              <Button
                onPress={onPress}
                text={'close'}
              />
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
              size={200}
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
    padding: 20
  },
  imgHeaderText: {
    backgroundColor: 'transparent',
    color: '#fff',
    fontWeight: '800',
    fontSize: 20,
    shadowColor: '#000'
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    height: '50%'
  }
};

export default SingleListInfo;
