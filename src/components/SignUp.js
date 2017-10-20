import React, { Component } from 'react';
import { Image, ImageBackground, KeyboardAvoidingView, StatusBar, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, rePasswordChanged, passwordCheck, pageNav } from '../actions';
import { Button, Card, CardSection, Input, Spinner } from './common';
import { authStyles } from './styles';

class SignUp extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onRePasswordChange(text) {
    this.props.rePasswordChanged(text);
  }

  onButtonPress() {
    const { email, password, rePassword } = this.props;

    this.props.passwordCheck({ email, password, rePassword });
  }

  navigateToPage() {
    this.props.pageNav();
    this.props.navigation.goBack();
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button
        onPress={this.onButtonPress.bind(this)}
        text="SignUp"
        componentTextStyle={{ color: '#fff' }}
        componentButtonStyle={{
          borderColor: '#fff',
          backgroundColor: 'transparent'
        }}
      />
    );
  }

  render() {
    const {
      cardStyle, containerStyle, errorTextStyle, sectionStyle, inputStyle, labelStyle
    } = authStyles;

    return (
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1}}>
      <ImageBackground
        source={require('../assets/Artboard.png')}
        style={containerStyle}
      >
        <StatusBar
          barStyle="light-content"
        />
        <Image
          source={require('../assets/batrLogo.png')}
          style={{
            height: 200,
            width: null,
            resizeMode: 'contain',
            marginTop: 80
          }}
        />
        <Card style={cardStyle}>
          <CardSection style={sectionStyle}>
            <Input
              label="Email"
              placeholder="email@provider.com"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
              inputStyle={inputStyle}
              labelStyle={labelStyle}
            />
          </CardSection>

          <CardSection style={sectionStyle}>
            <Input
              secureTextEntry
              label="Password"
              placeholder="IamMoreThan6Ltrs"
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
              inputStyle={inputStyle}
              labelStyle={labelStyle}
            />
          </CardSection>

          <CardSection style={sectionStyle}>
            <Input
              secureTextEntry
              label="Re-Password"
              placeholder="Re type password"
              onChangeText={this.onRePasswordChange.bind(this)}
              value={this.props.rePassword}
              inputStyle={inputStyle}
              labelStyle={labelStyle}
            />
          </CardSection>

          <Text style={errorTextStyle}>
            {this.props.error}
          </Text>

          <CardSection style={sectionStyle}>
            {this.renderButton()}
          </CardSection>

          <CardSection style={sectionStyle}>
            <Button
              onPress={this.navigateToPage.bind(this)}
              text="Login"
              componentTextStyle={{ color: '#fff' }}
              componentButtonStyle={{
                borderColor: 'transparent',
                backgroundColor: 'transparent'
              }}
            />
            {/*<Button
              onPress={() => this.props.navigation.navigate('PhoneAuth')}
              text="PhoneAuth"
              componentTextStyle={{ color: '#fff' }}
              componentButtonStyle={{
                borderColor: 'transparent',
                backgroundColor: 'transparent'
              }}
            />*/}
          </CardSection>
        </Card>
      </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

//destructuring done.. check bellow for un destructured
const mapStateToProps = ({ auth }) => {
  const { email, password, rePassword, error, loading } = auth;
  //Pass state to Component
  return { email, password, rePassword, error, loading };
};


export default connect(mapStateToProps, {
  emailChanged, passwordChanged, rePasswordChanged, passwordCheck, pageNav
})(SignUp);


// UNDESTRUCTURED
// const mapStateToProps = (state) => {
//   return {
//     email: state.auth.email,
//     password: state.auth.password,
//     error: state.auth.error
//   };
// };
