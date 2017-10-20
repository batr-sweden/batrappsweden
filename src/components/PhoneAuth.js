// import React, { Component } from 'react';
// import { Image, ImageBackground, StatusBar, Text } from 'react-native';
// import { connect } from 'react-redux';
// import { phoneChanged, phoneAuthStart } from '../actions';
// import { Button, Card, CardSection, Input, Spinner } from './common';
// import { authStyles } from './styles';
//
// class PhoneAuth extends Component {
//   onPhoneChanged(text) {
//     this.props.phoneChanged(text);
//   }
//
//   onButtonPress() {
//     const { phoneNum } = this.props;
//
//     this.props.phoneAuthStart(phoneNum);
//   }
//
//   renderButton() {
//     if (this.props.loading) {
//       return <Spinner size="large" />;
//     }
//
//     return (
//       <Button
//         onPress={this.onButtonPress.bind(this)}
//         text="ENTER"
//         componentTextStyle={{ color: '#fff' }}
//         componentButtonStyle={{
//           borderColor: '#fff',
//           backgroundColor: 'transparent'
//         }}
//       />
//     );
//   }
//
//   render() {
//     const {
//       cardStyle, containerStyle, errorTextStyle, sectionStyle, inputStyle, labelStyle
//     } = authStyles;
//
//     return (
//       <ImageBackground
//         source={require('../assets/Artboard.png')}
//         style={containerStyle}
//       >
//         <StatusBar
//           barStyle="light-content"
//         />
//         <Image
//           source={require('../assets/batrLogo.png')}
//           style={{
//             height: 200,
//             width: null,
//             resizeMode: 'contain',
//             marginTop: 80
//           }}
//         />
//         <Card style={cardStyle}>
//           <CardSection style={sectionStyle}>
//             <Input
//               label="Phone No."
//               placeholder="+467666777"
//               onChangeText={this.onPhoneChanged.bind(this)}
//               value={this.props.phoneNum}
//               inputStyle={inputStyle}
//               labelStyle={labelStyle}
//             />
//           </CardSection>
//
//           <Text style={errorTextStyle}>
//             {this.props.error}
//           </Text>
//
//           <CardSection style={sectionStyle}>
//             {this.renderButton()}
//           </CardSection>
//
//           <CardSection style={sectionStyle}>
//             <Button
//               onPress={() => this.props.navigation.goBack()}
//               text="back"
//               componentTextStyle={{ color: '#fff' }}
//               componentButtonStyle={{
//                 borderColor: 'transparent',
//                 backgroundColor: 'transparent'
//               }}
//             />
//           </CardSection>
//         </Card>
//       </ImageBackground>
//     );
//   }
// }
//
// //destructuring done.. check bellow for un destructured
// const mapStateToProps = ({ auth }) => {
//   const { phoneNum, error, loading } = auth;
//   //Pass state to Component
//   return { phoneNum, error, loading };
// };
//
//
// export default connect(mapStateToProps, { phoneChanged, phoneAuthStart })(PhoneAuth);
