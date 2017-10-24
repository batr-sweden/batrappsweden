import React, { Component } from 'react';
import { Image, ImageBackground, KeyboardAvoidingView, StatusBar, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser, pageNav } from '../actions';
import { Button, Card, CardSection, Input, Spinner } from './common';
import { authStyles } from './styles';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  navigateToPage() {
    this.props.pageNav();
    this.props.navigation.navigate('SignUp');
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button
        onPress={this.onButtonPress.bind(this)}
        text="Login"
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
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
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
              placeholder="Password"
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
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
              text="SignUp"
              componentTextStyle={{ color: '#fff' }}
              componentButtonStyle={{
                borderColor: 'transparent',
                backgroundColor: 'transparent'
              }}
            />
          </CardSection>
        </Card>
      </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}


//destructuring done.. check bellow for un destructured
const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  //Pass state to Component
  return { email, password, error, loading };
};


export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser, pageNav
})(LoginForm);


// UNDESTRUCTURED
// const mapStateToProps = (state) => {
//   return {
//     email: state.auth.email,
//     password: state.auth.password,
//     error: state.auth.error
//   };
// };
