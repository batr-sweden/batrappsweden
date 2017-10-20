//Import libraries for Component
import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
  Dimensions
} from 'react-native';

const { height, width } = Dimensions.get('window');
// Create component
class TrendingList extends Component {
  render() {
    const {
      headerContentStyle,
      headerTextContentStyle,
      headerTextStyle,
      imageStyle,
      containerStyle,
      footerTextStyle,
    } = styles;
    const { image, storeName } = this.props.trending;

    return (
      <View style={containerStyle}>
        <View style={headerContentStyle}>
          <View style={headerTextContentStyle}>
            <Text style={headerTextStyle}>{ storeName }</Text>
            <Text style={footerTextStyle}>This is little text</Text>
          </View>
        </View>

        <View>
          <Image
            source={{ uri: image }}
            style={imageStyle}
            resizeMode='stretch'
          />
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    borderBottomWidth: 0,
    paddingTop: 5,
    paddingLeft: 10,
    // paddingRight: 15,
    //paddingBottom: 0,
  },
  headerContentStyle: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerTextContentStyle: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingBottom: 5,
  },
  headerTextStyle: {
    fontSize: 18,
    fontWeight: '300',
    backgroundColor: 'transparent',
    color: '#000',
    paddingLeft: 1
  },
  footerTextStyle: {
    fontSize: 12,
    backgroundColor: 'transparent',
    color: '#616161',
    paddingLeft: 1
  },
  imageStyle: {
    height: height * 0.3,
    width: width * 0.8,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  }
};

export default TrendingList;
