import React, { Component } from 'react';
import { Alert, Image, Text, View } from 'react-native';
import { Card, ListItem } from 'react-native-elements';

import { Button, CardSection, Header } from './common';

const pageColor = '#448aff';

class Profile extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          headerText={'Profile'}
          componentHeaderStyle={{ backgroundColor: pageColor }}
          componentHeaderTextStyle={{ color: '#fff' }}
        />
        <CardSection style={styles.sectionStyle}>
          <View style={{ minHeight: 200, backgroundColor: pageColor, flex: 1 }}>
            <Image
              style={styles.thumbnailStyle}
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWXWB6vzNFvrBCTNPrBmHMdBxeDx5Q_BfybhvckB87zY5ZEsVSzQ' }}
            />
            <Text style={styles.profileTextStyle}>First and Last Name</Text>
            <Button
              buttonPressed={() => { Alert.alert('pressed'); }}
              buttonText={'Sign Out'}
              componentTextStyle={styles.textStyle}
              componentButtonStyle={styles.buttonStyle}
            />
          </View>
        </CardSection>

          <Card style={{ padding: 0 }}>
            {
              list.map((item, i) => (
                <ListItem
                  key={i}
                  title={item.title}
                  leftIcon={{ name: item.icon }}
                  containerStyle={{ borderBottomColor: pageColor }}
                />
              ))
            }
          </Card>
      </View>
    );
  }
}

const list = [
  {
    title: 'Profile',
    icon: 'av-timer'
  },
  {
    title: 'Kontakt Info',
    icon: 'av-timer'
  },
  {
    title: 'All Rewards',
    icon: 'av-timer'
  },
  {
    title: 'Hjälp',
    icon: 'av-timer'
  },
  {
    title: 'Qr Kod',
    icon: 'av-timer'
  }
];

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
  buttonStyle: {
    alignSelf: 'center',
    backgroundColor: 'transparent',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
    marginLeft: null,
    marginRight: null,
    maxHeight: 20,
    width: 100,
    justifyContent: 'center',
  },
  textStyle: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '400',
    paddingTop: null,
    paddingBottom: null
  },
};

export default Profile;
