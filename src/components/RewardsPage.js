import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, StatusBar, View } from 'react-native';
import { rewardsFetch, phoneFetch } from '../actions';
import RewardsListItem from './RewardsListItem';
import { Header } from './common';
import { primaryColor } from './styles';
import PhoneModal from './PhoneModal';

class RewardsPage extends Component {
  state = {
    header: true,
    phoneModalVisible: false
  }
  componentWillMount() {
    this.props.phoneFetch(); //Get user phone number
    this.props.rewardsFetch(); // Get users rewards
    this.createDataSource(this.props); // Create list view with it
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props
    this.props.phoneNum == null ? this.setState({ phoneModalVisible: true }) : this.setState({ phoneModalVisible: false })
    this.createDataSource(nextProps);
  }

  createDataSource({ rewards }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(rewards);
  }

  scrolling(e) {
    const contentOffset = e.nativeEvent.contentOffset.y;
    (contentOffset > 100) ? this.setState({ header: false }) : this.setState({ header: true });
  }

  showModal() {
    if (this.state.phoneModalVisible) {
      return (
        <PhoneModal
          onPress={() => {
              this.setState({ phoneModalVisible: !this.state.phoneModalVisible });
            }}
        />
      );
    }
  }

  renderRow(reward) {
    return <RewardsListItem reward={reward} />;
  }

  renderHeader() {
    if (this.state.header) {
      return (
        <View>
          <StatusBar
            barStyle="light-content"
          />
          <Header
            headerText="Rewards"
            textStyle={{ color: '#fff' }}
          />
        </View>
      );
    }

    return (
      <StatusBar
        barStyle="light-content"
      />
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>

        {this.renderHeader()}

        {this.showModal()}

        <ListView
          removeClippedSubviews={false}
          onScroll={this.scrolling.bind(this)}
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const rewards = _.map(state.rewards, (val, uid) => {
    return { ...val, uid };
  });

  const { phoneNum } = state.user;

  return { rewards, phoneNum };
};

export default connect(mapStateToProps, { rewardsFetch, phoneFetch })(RewardsPage);
