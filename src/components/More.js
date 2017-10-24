import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { secondaryColor } from './styles';
import { signOutUser } from '../actions';
import { CardSection, Header } from './common';

class More extends Component {
  signOut() {
    this.props.signOutUser();
  }

  render() {
    const { buttonStyle } = styles;

    return (
      <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
        <Header
          headerText={'Profile'}
          viewStyle={{ alignItems: 'flex-start' }}
          textStyle={{ color: '#fff', paddingLeft: 5, fontWeight: 'bold' }}
        />
        <CardSection style={{ padding: 0, borderTopWidth: 1 }}>
          <View style={{ minHeight: 300, backgroundColor: '#fafafa', flex: 1 }}>


          </View>
        </CardSection>

          <View style={{ padding: 0, paddingTop: 10 }}>
            <Button
              raised
              icon={{ name: 'code' }}
              onPress={this.signOut.bind(this)}
              title='FAQ'
              buttonStyle={buttonStyle}
            />
            <Button
              raised
              icon={{ name: 'cached' }}
              onPress={this.signOut.bind(this)}
              title='Sign Out'
              buttonStyle={buttonStyle}
            />
          </View>
      </View>
    );
  }
}

const styles = {
  sectionStyle: {
    flex: 1
  },
  containerStyle: {
    flex: 1,
    // borderColor: 'orange',
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#F8F8F8',
    overflow: 'hidden',
    paddingTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    minHeight: 100
  },
  buttonStyle: {
    backgroundColor: secondaryColor,
    marginBottom: 10
  },
  profileTextStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10
  },
  thumbnailStyle: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 2,
    marginBottom: 10
  },
  textStyle: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '400',
    paddingTop: null,
    paddingBottom: null
  },
};

export default connect(null, { signOutUser })(More);
