import _ from 'lodash';
import React, { Component } from 'react';
import { ScrollView, ListView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { SearchBar } from 'react-native-elements';
import { fetchTrendingStores, searching } from '../actions';
import TrendingList from './TrendingList';
import { HorizontalLine } from './common';

class Search extends Component {
  componentWillMount() {
    this.setState({ searching: false });

    this.props.fetchTrendingStores();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props

    this.createDataSource(nextProps);
  }

  searching(text) {
    this.props.searching(text);
  }

  createDataSource({ trending }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(trending);
  }

  storyView() {
    if ((this.props.searchingValue).length > 0) {
      return (
        <ScrollView>
          <Text> Search result comes here </Text>
        </ScrollView>
      );
    }
    return (
      <ScrollView>
        <View style={{ backgroundColor: '#FFF', flex: 1 }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              paddingLeft: 10,
              paddingTop: 10,
              paddingBottom: 2,
              color: '#1565c0'
            }}
          >
            Trending
          </Text>

          <HorizontalLine />

          <ListView
            enableEmptySections
            horizontal
            removeClippedSubviews={false}
            dataSource={this.dataSource}
            renderRow={this.renderTrending}
          />
        </View>

        <View style={{ backgroundColor: '#FFF', flex: 1 }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              paddingLeft: 10,
              paddingTop: 10,
              paddingBottom: 2,
              color: '#1565c0'
            }}
          >
            New Stores
          </Text>

          <HorizontalLine />

          <ListView
            enableEmptySections
            horizontal
            removeClippedSubviews={false}
            dataSource={this.dataSource}
            renderRow={this.renderTrending}
          />
        </View>
      </ScrollView>
    );
  }

  renderTrending(trending) {
    return <TrendingList trending={trending} />;
  }

  render() {
    return (
      <View style={{ flex: 1, marginTop: 20 }}>
        <View style={{ backgroundColor: '#FFF' }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              paddingLeft: 10
            }}
          >
            Search
          </Text>
          <SearchBar
            lightTheme
            onChangeText={this.searching.bind(this)}
            placeholder='Type Here...'
            value={this.props.searchingValue}
          />
        </View>

        {this.storyView()}

      </View>
    );
  }
}

const mapStateToProps = state => {
  const trending = _.map(state.search.trending, (val, uid) => {
    return { ...val, uid };
  });
  const { searchingValue } = state.search;

  return { trending, searchingValue };
};

export default connect(mapStateToProps, { fetchTrendingStores, searching })(Search);
