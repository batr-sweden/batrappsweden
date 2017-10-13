import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Button, Card, CardSection, Input, Spinner } from './common';

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

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button
        onPress={this.onButtonPress.bind(this)}
        text="Login"
        componentTextStyle={{ color: '#D66588' }}
        componentButtonStyle={{ borderColor: '#D66588' }}
      />
    );
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Card>
          <CardSection>
            <Input
              label="Email"
              placeholder="email@provider.com"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry
              label="Password"
              placeholder="Password"
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </CardSection>

          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>

          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#EA5C8F'
  }
};

//destructuring done.. check bellow for un destructured
const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  //Pass state to Component
  return { email, password, error, loading };
};


export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);


// UNDESTRUCTURED
// const mapStateToProps = (state) => {
//   return {
//     email: state.auth.email,
//     password: state.auth.password,
//     error: state.auth.error
//   };
// };
