import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View } from 'react-native';
import { rewardsFetch } from '../actions';
import RewardsListItem from './RewardsListItem';
import { Header } from './common';

class RewardsPage extends Component {
  componentWillMount() {
    this.props.rewardsFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props

    this.createDataSource(nextProps);
  }

  createDataSource({ rewards }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(rewards);
  }

  renderRow(reward) {
    return <RewardsListItem reward={reward} />;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          headerText="Rewards"
        />
        <ListView
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

  return { rewards };
};

export default connect(mapStateToProps, { rewardsFetch })(RewardsPage);
