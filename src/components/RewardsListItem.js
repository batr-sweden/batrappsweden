//Import libraries for Component
import React, { Component } from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View } from 'react-native';
import firebase from 'firebase';
import Badge from 'react-native-smart-badge';
import { CardSection } from './common';
import SingleListInfo from './SingleListInfo';

// Create component
class RewardsListItem extends Component {
  state = {
    modalVisible: false,
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  renderDescription() {
    const { reward } = this.props;
    return (
      <SingleListInfo
        reward={reward}
        visible={this.state.modalVisible}
        onPress={() => { this.setModalVisible(!this.state.modalVisible); }}
      />
    );
  }

  render() {
    const {
      thumbnailStyle,
      headerContentStyle,
      headerTextContentStyle,
      thumbnailContainerstyle,
      headerTextStyle,
      imageStyle,
      containerStyle,
      footerTextContentStyle,
      footerTextStyle,
      footerBadgeStyle
    } = styles;
    const { image, points, storeName, thumbnail_image, title } = this.props.reward;

    return (
      <View>
        <TouchableOpacity
          onPress={() => this.setModalVisible(true)}
        >
          <View>
            <CardSection style={containerStyle} >
              <ImageBackground
                source={{ uri: image }}
                style={imageStyle}
                resizeMode='stretch'
              >
                <View style={headerContentStyle}>
                  <View style={thumbnailContainerstyle}>
                    <Image
                      style={thumbnailStyle}
                      source={{ uri: thumbnail_image }}
                    />
                  </View>
                  <View style={headerTextContentStyle}>
                    <Text style={headerTextStyle}>{ storeName }</Text>
                  </View>
                </View>
                <View style={footerTextContentStyle}>
                  <Text style={footerTextStyle}>{title}</Text>
                  <Badge
                    minWidth={18} minHeight={18}
                    style={footerBadgeStyle} textStyle={{ color: '#bf360c' }}
                  >
                      {points}
                  </Badge>
                </View>
              </ImageBackground>
            </CardSection>
          </View>
        </TouchableOpacity>

        {this.renderDescription()}
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    borderBottomWidth: 0,
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 0,
  },
  imageStyle: {
    flex: 1,
    height: 350,
    width: null,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  headerContentStyle: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerTextContentStyle: {
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  headerTextStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    color: '#fff'
  },
  thumbnailStyle: {
    height: 80,
    width: 80,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    marginTop: 10
  },
  thumbnailContainerstyle: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginRight: 10,
    marginLeft: 10,
  },
  footerTextContentStyle: {
    flexGrow: 1,
    height: null,
    width: null,
    justifyContent: 'flex-end',
  },
  footerTextStyle: {
    backgroundColor: 'transparent',
    color: '#fff',
    marginLeft: 10
  },
  footerBadgeStyle: {
    alignSelf: 'flex-end',
    backgroundColor: '#F8F8F8',
    marginRight: 10,
    marginBottom: 10
  },
};

export default RewardsListItem;
