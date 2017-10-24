import React, { Component } from 'react';
import { ImageBackground, View, Text } from 'react-native';
import { connect } from 'react-redux';
import QRCode from 'react-native-qrcode';
import { primaryColor, secondaryColor } from './styles';


class QRPage extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../assets/Artboard.png')}
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
      <View
        style={{
          paddingTop: 50
        }}
      >
        <Text style={{ backgroundColor: 'transparent' }}>QR PAGE </Text>
      </View>

      <View
        style={{
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        height: 250,
        width: 250,
        borderRadius: 50,
        borderWidth: 0,
        backgroundColor: '#fff',
        marginBottom: 20
        }}
      >
        <QRCode
          value={this.props.phoneNum}
          size={150}
          bgColor={primaryColor}
          fgColor={secondaryColor}
        />
      </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = (props) => {
  const { phoneNum } = props.user;

  return { phoneNum };
};

export default connect(mapStateToProps)(QRPage);
