import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class DetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Detail',
  };

  render() {
    const { currentUser } = this.props.data; 
    
    return (
      <ScrollView style={styles.container}>
      {currentUser &&
        <Text>{currentUser.email}</Text>
      }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

export default graphql(
  gql`
    query User {
      currentUser {
        _id
        email
      }
    }
  `
)(DetailScreen);