import React from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';

const PhoneModal = (props) => {
  return (
    <Modal
      animationType="slide"
      transparent={props.transparent}
      visible={props.modalVisible}
      onRequestClose={props.onRequestClose}
    >
     <View style={{ marginTop: 22 }}>
      <View>
        <Text>Phone Required</Text>

        <TouchableHighlight onPress={props.onPress}>
          <Text>Hide Modal</Text>
        </TouchableHighlight>

      </View>
     </View>
    </Modal>
  );
};

export default PhoneModal;
